const express = require('express');
const { Configuration, OpenAIApi } = require('openai');
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');


const validURL = async (str) => {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
      '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
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


    const {message, image} = req.body;
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
                        console.log(link);
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
                model: "text-davinci-003",
                prompt: message,
                temperature: 0.2,
                max_tokens: 4000,
            });

            if(!image) return res.status(response.status).json({result: response.data.choices[0].text});
            
            const imageResponse = await openai.createImage({
                prompt: image,
                n: 1,
                size: "1024x1024",
            });

            return res.status(response.status).json({result: response.data.choices[0].text, image: imageResponse.data.data[0].url});

        }

    } catch (err) {
        console.log(err, "CHECK");
        return next(err);
    }

});

module.exports = router;
