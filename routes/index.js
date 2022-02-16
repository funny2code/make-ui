const express = require('express');
const router = express.Router();
const make = require('../config/make');
const themesModel = require('../models/themes');

/* GET home page. */
router.get('/', async (req, res, next) => {
  let themes = '';
  try {
    themes = await themesModel.find({});
  } catch (err){
    next(err);
  }
  
  res.render('index', { make: make, themes: themes });

});

module.exports = router;
