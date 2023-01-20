const express = require('express');
const router = express.Router();
const modelPrompts = require('../models/prompts');


/* POST save prompts. */
router.post('/', async (req, res, next) => {

    const {_id, text_prompt, logo_prompt, image_prompt, color_prompt, image_model} = req.body;
    if (!req?.session?.user?.isAdmin) return next();
    if(!text_prompt || !logo_prompt || !image_prompt || !color_prompt || !image_model) return next();

    try {
        if(_id){
            const prompts = await modelPrompts.findByIdAndUpdate(_id, {text_prompt, logo_prompt, image_prompt, color_prompt, image_model}).exec();
            if(!prompts) return res.status(500).send({status: 500, message: "error"});
            return res.status(200).send({status: 200, message: "Updated!"})
        } else {
            const newPrompts = new modelPrompts({
                text_prompt: text_prompt, 
                logo_prompt: logo_prompt, 
                image_prompt: image_prompt,
                color_prompt: color_prompt,
                image_model: image_model
            });
        
            newPrompts.save(async (err, prompts) => {
                if(err) return res.status(500).send({status: 500, message: "error"});
                return res.status(200).send({status: 200, message: "Saved!"});
            });
        }
    } catch (err){
        return next(err);
    }

});

module.exports = router;
