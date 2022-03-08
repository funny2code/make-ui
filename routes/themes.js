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
  if(!global && !section) return next();

  let theme = '';
  let pageResult = ''; 
  let sectionsResult = '';
  let activeType = global ? 'global' : 'section';
  let active = global ? global : section;

  try{
    theme = await themesModel.findById(id).exec();
    if(!theme) return next();
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

  const pageOptions = [
    {name: 'Home Page'},
    {name: 'Product Page'},
  ];

  const settingOptions = [
    {title: "Brand", name: "Global Styles", icon: "brand", type: "global"},
    {title: "Fonts", name: "Typography Settings", icon: "fonts", type: "global"},
    {title: "Spacing", name: "Spacing Values", icon: "spacing", type: "global"},
    {title: "Cart", name: "Cart", icon: "cart", type: "global"},
    {title: "Sections", name: active, icon: "spacing", menu: "pysectionoptions", subOptions: pageResult.sections, type: "section"},
    {title: "Pages", name: active, icon: "pages", menu: "pypageoptions", subOptions: pageOptions, type: "page" }
  ];

  // const sectionOptions = [
  //   {"name": "announcement bar"},
  //   {"name": "header"},
  //   {"name": "hero banner"},
  //   {"name": "marquee"},
  //   {"name": "partners"},
  //   {"name": "collection see"},
  //   {"name": "image with two products"},
  //   {"name": "collection our"},
  //   {"name": "featured collection"},
  //   {"name": "rich text"},
  //   {"name": "footer"}
  // ];
  
  res.render('theme', {
    make: make, 
    id: theme._id,
    page: page,
    settingOptions: settingOptions,
    fonts: fonts,
    settings: settings ? settings : null,
    section: sections ? sections[0] : null,
    active: active,
    activeType: activeType
  });

});

module.exports = router;
