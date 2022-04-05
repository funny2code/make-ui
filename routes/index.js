const express = require('express');
const path = require('path');
const router = express.Router();
const make = require('../config/make');
const modelThemes = require('../models/themes');
const modelUsersThemes = require('../models/usersthemes');

/* GET All Themes and User Themes. */
router.get('/', async (req, res, next) => {

  try {
    const Themes = await modelThemes.find({}, '_id, theme_set');
    const UsersThemes = req.session.user ? await modelUsersThemes.find({user_id: req.session.user._id}, '_id theme_set').exec() : null; 

    res.render('index', {
      user: req?.session?.user || null, 
      make: make, 
      themes: Themes,
      usersThemes: UsersThemes
    });

  } catch (err){
    return next(err);
  }

});

module.exports = router;
