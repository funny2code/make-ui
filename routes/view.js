const express = require('express');
const router = express.Router();
const make = require('../config/make');
const makeMenu = require('../config/menu');
const shop = require('../config/shop');
const collection = require('../config/collection');
const themesModel = require('../models/themes');
const pagesModel = require('../models/pages');
const sectionsModel = require('../models/sections');

/* GET theme settings and sections. */
router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  const {page} = req.query;
  if(!id || !page) return next();

  let theme = '';
  let pageResult = '';
  let sections = '';

  try{
    theme = await themesModel.findById(id).exec();
    if(!theme) return next();
    pageResult = await pagesModel.findOne({theme_id: theme._id, name: page}).exec();
    if(!pageResult) return next();
    sections = await sectionsModel.findOne({theme_id: theme._id}).exec();
  } catch (err){
    next(err);
  }

  const settings = {};
  theme?.settings && theme.settings.map(el => {
      if(el.settings){
          for(var k in el.settings) {
              settings[el.settings[k].id] = el.settings[k].default;
          }
      }
  });

  const sectionSettings = [];
  pageResult.sections.map(item => {
    sections?.sections && sections.sections.map(el => {
      if(item.name === el.name){
        const sectionChildSettings = {};
        if(el.settings){
            for(var k in el.settings) {
                sectionChildSettings[el.settings[k].id] = el.settings[k].default;
            }
        }
        el.presets ? el.presets[0]?.blocks && el.presets[0].blocks.length 
        ? sectionSettings.push({name: el.name, settings: sectionChildSettings, blocks: el.presets[0].blocks}) 
        : sectionSettings.push({name: el.name, settings: sectionChildSettings, blocks: []})
        : sectionSettings.push({name: el.name, settings: sectionChildSettings, blocks: []});

        console.log(el.presets && el.presets[0]?.blocks);

      }
    });
  });

  res.render('view', {
    menu: makeMenu,
    shop: shop,
    collection: collection,
    settings: settings,
    sections: sectionSettings
  });

});


/* POST theme settings and sections. */
router.post('/:id', async (req, res, next) => {
  const {id} = req.params;
  const {settings, section} = req.body;
  const {page} = req.query;
  var theme = '', sections = '', pageResult = '';
  var defaultSettings = {}, defaultSections = [], defaultBlocks = [];
  if(!id || !page) return next();

  if(!settings || !section){
    try{
      theme = await themesModel.findById(id).exec();
      if(!theme) return next();
      pageResult = await pagesModel.findOne({theme_id: theme._id, name: page}).exec();
      if(!pageResult) return next();
      sections = await sectionsModel.findOne({theme_id: theme._id}).exec();
    } catch (err){
      next(err);
    }
    
    if(!settings){
      theme?.settings && theme.settings.map(el => {
          if(el.settings){
              for(var k in el.settings) {
                defaultSettings[el.settings[k].id] = el.settings[k].default;
              }
          }
      });
    }

    pageResult.sections.map(item => {
      sections?.sections && sections.sections.map(el => {
        if(item.name === el.name){
          let sectionChildSettings = {};
          if(el.settings){
            for(var k in el.settings) {
                sectionChildSettings[el.settings[k].id] = el.settings[k].default;
            }
          }
          
          el.presets ? el.presets[0]?.blocks && el.presets[0].blocks.length 
          ? defaultSections.push({name: el.name, settings: sectionChildSettings, blocks: el.presets[0].blocks}) 
          : defaultSections.push({name: el.name, settings: sectionChildSettings, blocks: []})
          : defaultSections.push({name: el.name, settings: sectionChildSettings, blocks: []});

        }
      });
    });

    section && defaultSections.forEach(item => item.name === section[0].name ? item.settings = section[0].settings : null);
    
  }
  
  res.render('view', {
    menu: makeMenu,
    shop: shop,
    collection: collection,
    settings: settings ? settings[0] : defaultSettings,
    sections: defaultSections
  });

});

module.exports = router;
