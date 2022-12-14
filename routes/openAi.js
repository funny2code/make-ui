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


    const {message} = req.body;
    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    });

    try {
        
        if(await validURL(message)){
            const {data} = await axios.get(message);
            const $ = cheerio.load(data);
            return res.status(200).json({result: $.html()});
        } else {
            const openai = new OpenAIApi(configuration);
            const response = await openai.createCompletion({
                model: "text-davinci-003",
                prompt: message,
                temperature: 0,
                max_tokens: 4000,
            });

            return res.status(response.status).json({result: response.data.choices[0].text});
        }

    } catch (err) {
        return next(err);
    }

});

module.exports = router;
