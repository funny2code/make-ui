const express = require('express');
const router = express.Router();
const make = require('../config/make');
const modelThemes = require('../models/themes');
const fonts = require('../config/fonts');

/* GET Theme Settings and Sections. */
router.get('/:id', async (req, res, next) => {

  const {id} = req.params;
  const {page, global, section} = req.query;

  if(!id || !page) return next();

  const activeType = global ? 'global' : 'section';
  const active = global ? global : section;

  try{
    const theme = await modelThemes.findById(id).exec();
    if(!theme) return next();

    const settings = global ? global !== 'Global Styles' 
    ? theme.theme_set.filter(item => item.name === global)
    : theme.theme_set.filter(item => item.name === 'theme_info' || item.name === global)
    : null;
  
    const sections = section ? theme.theme_sec.filter(item => item.name === section) : null;
    const pageSections = theme.theme_pag.filter(item => { if(item.name === page) return item.items});
    const pageNames = []; 
    theme.theme_pag.forEach(item => pageNames.push({name:item.name}));
    
    res.render('theme', {
      user: req?.session?.user || null,
      isAdmin: req?.session?.user?.isAdmin || null, 
      make: make, 
      id: theme._id,
      page: page,
      sidebar: theme.app_sid || null,
      fonts: fonts,
      settings: settings,
      section: sections ? sections[0] : null,
      pageNames: pageNames,
      pageSections: pageSections[0].items,
      active: active,
      activeType: activeType
    });

  } catch (err){
    return next(err);
  }

});

module.exports = router;
