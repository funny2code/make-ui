const express = require('express');
const router = express.Router();
const make = require('../contents/make');
const modelThemes = require('../models/themes');
const modelPrompts = require('../models/prompts');


/* GET All Themes for remix page. */
router.get('/', async (req, res, next) => {

  try {
    const allThemes = await modelThemes.find({}, '_id, settings_schema').exec();
    const prompts = await modelPrompts.find().exec();
    res.render('remix', {
      user: req?.session?.user || null, 
      make: make, 
      themes: allThemes,
      prompts: (prompts?.length) ? prompts[0] : null
    });
  } catch (err){
    return next(err);
  }

});

module.exports = router;
