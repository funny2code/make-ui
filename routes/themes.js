const express = require('express');
const router = express.Router();
const make = require('../config/make');
const themesModel = require('../models/themes');
const fonts = require('../config/fonts');

/* GET users listing. */
router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  const {global} = req.query;
  if(!id || !global) return next();

  let theme = '';

  try{
    theme = await themesModel.findById(id).exec();
    if(!theme) return next(err); 
  } catch (err){
    return next(err);
  }

  const settings = global !== 'Global Styles'
  ? theme.settings.filter(item => item.name === global)
  : theme.settings.filter(item => item.name === 'theme_info' || item.name === global);

  const sidebarSelect = [
    {name: 'Global Styles'}, 
    {name:'Typography Settings'}, 
    {name: 'Spacing Values'}
  ];
  
  res.render('theme', { 
    make: make, 
    id: theme._id,
    sidebarOptions: sidebarSelect,
    fonts: fonts,
    settings: settings,
    active: global ? global : "Global Styles"
  });

});

module.exports = router;
