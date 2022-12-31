const express = require('express');
const {Worker, workerData} = require('node:worker_threads');
const { Configuration, OpenAIApi } = require('openai');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');
const path = require('path');


const validURL = async (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ 
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ 
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ 
      '(\\#[-a-z\\d_]*)?$','i');
    return !!pattern.test(str);
};

router.get("/", async (req, res, next) => {

    try {
        res.render('openai');
    } catch (err) {
        return next(err);
    }

});

router.post("/", async (req, res, next) => {


    const {message, image, openaiModel} = req.body;
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        
        if(await validURL(message)){
            const {data} = await axios.get(message);
            const $ = cheerio.load(data);
            const getLinks = $('link');
            if(getLinks?.length){
                for(let i=0; i<getLinks.length; i++){
                    if(!getLinks[i]?.attribs?.href?.includes('data:text/css;base64') && getLinks[i]?.attribs?.href?.includes('.css')){
                        let link = getLinks[i]?.attribs?.href;
                        let newLink = (link?.includes("http:") || link?.includes("https:")) 
                        ? link 
                        : `https:${link}`;
                        let getLink = await axios.get(newLink);
                        let linkData = getLink.data;
                        $('body').append(`<style type="text/css">${linkData}</style>`);
                    }
                }
            }
            $('link').remove();
            return res.status(200).json({result: $.html()});
        } else {
            const openai = new OpenAIApi(configuration);
            const response = await openai.createCompletion({
                model: openaiModel || "text-davinci-003",
                prompt: message,
                temperature: 0,
                max_tokens: 2048,
                top_p: 1.0,
                frequency_penalty: 0.0,
                presence_penalty: 0.0, 
            });

            if(!image) return res.status(response.status).json({result: response.data.choices[0].text});
            
            //Create new worker
            const worker = new Worker(path.join(__dirname, "./worker.js"), {workerData: {image: image}});

            //Listen for a message from worker
            worker.once("message", result => {
                console.log(`check ${result}`);
                return res.status(200).json({result: response.data.choices[0].text, image: result});
            });

            worker.on("error", error => {
                console.log(error, "ERROR");
                return res.status(500).json({result: "INTERNAL SERVER ERROR"});
            });

            worker.on("exit", exitCode => {
                return res.status(500).json({result: "EXIT"});
            })
            

        }

    } catch (err) {
        console.log(err, "ERR");
        return res.status(err.response.status || 500).json({result: err.response.statusText || "SERVER ERROR"});
    }

});

module.exports = router;
