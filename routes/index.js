const express = require('express');
const router = express.Router();
const make = require('../contents/make');
const modelRemix = require('../models/remix');
const modelThemes = require('../models/themes');
const modelUsersThemes = require('../models/customer-themes');


/* GET All Themes and User Themes. */
router.get('/', async (req, res, next) => {

  try {
    const allThemes = await modelThemes.find({}, '_id, settings_schema').exec();
    const allUsersThemes = req.session.user ? await modelUsersThemes.find({user_id: req.session.user._id}, '_id settings_schema').exec() : null; 
    const allRemixThemes = req.session.user?.isAdmin ? await modelRemix.find({}, '_id, settings_data').exec() : null;
    res.render('index', {
      user: req?.session?.user || null, 
      make: make, 
      themes: allThemes,
      usersThemes: allUsersThemes,
      remixThemes: allRemixThemes
    });
  } catch (err){
    return next(err);
  }

});

module.exports = router;
