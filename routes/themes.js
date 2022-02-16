const express = require('express');
const router = express.Router();
const make = require('../config/make');
const themesModel = require('../models/themes');

/* GET users listing. */
router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  if(!id) return next();

  let theme = '';

  try{
    theme = await themesModel.findById(id).exec();
  } catch (err){
    next(err);
  }

  res.render('theme', { 
    make: make, 
    id: theme._id,
    settings: theme.settings 
  });

});

module.exports = router;
