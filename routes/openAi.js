const express = require("express");
const { Configuration, OpenAIApi } = require("openai");
const router = express.Router();


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
        
        const openai = new OpenAIApi(configuration);
        const response = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: message,
            temperature: 0,
            max_tokens: 4000,
        });

        return res.status(response.status).json({result: response.data.choices[0].text});

    } catch (err) {
        return next(err);
    }

});

module.exports = router;
