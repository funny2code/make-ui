const express = require('express');
const path = require('path');
const router = express.Router();
const make = require('../contents/make');
const modelThemes = require('../models/themes');
const modelUsersThemes = require('../models/customer-themes');

/* GET All Themes and User Themes. */
router.get('/', async (req, res, next) => {

  try {
    const Themes = await modelThemes.find({}, '_id, theme_set');
    const UsersThemes = req.session.user ? await modelUsersThemes.find({user_id: req.session.user._id}, '_id theme_set').exec() : null; 
    if(Themes?.length > 1){
      req.session.themeIDS = [];
      Themes?.forEach(theme => req.session.themeIDS.push(theme._id));
    }

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
