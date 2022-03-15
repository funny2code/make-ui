const express = require('express');
const router = express.Router();
const make = require('../config/make');
const themesModel = require('../models/themes');
const sectionsModel = require('../models/sections');
const pagesModel = require('../models/pages');
const fonts = require('../config/fonts');

/* GET users listing. */
router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  const {page, global, section} = req.query;
  if(!id || !page) return next();

  let theme = '';
  let allPageNames= '';
  let pageResult = ''; 
  let sectionsResult = '';
  let activeType = global ? 'global' : 'section';
  let active = global ? global : section;

  try{
    theme = await themesModel.findById(id).exec();
    if(!theme) return next();
    allPageNames = await pagesModel.find({}, 'name').exec();
    if(!allPageNames) return next();
    pageResult = await pagesModel.findOne({theme_id: theme._id, name: page}).exec();
    if(!pageResult) return next();
    sectionsResult = await sectionsModel.findOne({theme_id: theme._id}).exec();
  } catch (err){
    return next(err);
  }

  const settings = global ? global !== 'Global Styles' 
  ? theme.settings.filter(item => item.name === global)
  : theme.settings.filter(item => item.name === 'theme_info' || item.name === global)
  : null;

  const sections = section ? sectionsResult.sections.filter(item => item.name === section) : null;
  
  res.render('theme', {
    make: make, 
    id: theme._id,
    page: page,
    sidebar: theme?.sidebar ? theme.sidebar : null,
    fonts: fonts,
    settings: settings ? settings : null,
    section: sections ? sections[0] : null,
    pageNames: allPageNames,
    pageSections: pageResult?.sections ? pageResult?.sections :null,
    active: active,
    activeType: activeType
  });

});

module.exports = router;
