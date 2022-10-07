const express = require('express');
const router = express.Router();
const make = require('../contents/make');
const modelThemes = require('../models/themes');
const modelUsersThemes = require('../models/customer-themes');


/* GET All Themes and User Themes. */
router.get('/', async (req, res, next) => {

  try {
    const allThemes = await modelThemes.find({}, '_id, settings_schema');
    const allUsersThemes = req.session.user ? await modelUsersThemes.find({user_id: req.session.user._id}, '_id settings_schema').exec() : null; 
    res.render('index', {
      user: req?.session?.user || null, 
      make: make, 
      themes: allThemes,
      usersThemes: allUsersThemes
    });

  } catch (err){
    return next(err);
  }

});

module.exports = router;
