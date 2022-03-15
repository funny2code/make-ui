const express = require('express');
const router = express.Router();
const make = require('../config/make');
const makeMenu = require('../config/menu');
const shop = require('../config/shop');
const collection = require('../config/collection');
const product = require('../config/product');
const cart = require('../config/cart');
const themesModel = require('../models/themes');
const pagesModel = require('../models/pages');
const sectionsModel = require('../models/sections');

/* GET theme settings and sections for Iframe View. */
router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  const {page, section, global} = req.query;
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
  if(section){
    sections?.sections && sections.sections.map(item => {
      if(item.name === section){
        const sectionChildSettings = {};
        const blocks = [];
        if(item.settings){
            for(var k in item.settings) {
              sectionChildSettings[item.settings[k].id] = item.settings[k].default;
            }
        }
        // item.presets ? item.presets[0]?.blocks && item.presets[0].blocks.length 
        // ? sectionSettings.push({name: item.name, settings: sectionChildSettings, blocks: item.presets[0].blocks}) 
        // : sectionSettings.push({name: item.name, settings: sectionChildSettings, blocks: []})
        // : sectionSettings.push({name: item.name, settings: sectionChildSettings, blocks: []});
        
        if(item?.blocks?.length){
          item.blocks.forEach((block, index)=>{
            blocks[index] = {type: block.type, settings:{}};
            if(block && block?.settings){
              for(var i in block.settings){
                blocks[index].settings[block.settings[i].id] = block.settings[i].default;
              }
            }
          })
        }

        sectionSettings.push({name: item.name, settings: sectionChildSettings, blocks: blocks});

        

      }
    });
  } else if(global !== 'Cart') {
    pageResult.sections.map(item => {
      sections?.sections && sections.sections.map(el => {
        if(item.name === el.name){
          const sectionChildSettings = {};
          const blocks = [];
          if(el.settings){
              for(var k in el.settings) {
                  sectionChildSettings[el.settings[k].id] = el.settings[k].default;
              }
          }

          if(el?.blocks?.length){
            el.blocks.forEach((block, index)=>{
              blocks[index] = {type: block.type, settings:{}};
              if(block && block?.settings){
                for(var i in block.settings){
                  blocks[index].settings[block.settings[i].id] = block.settings[i].default;
                }
              }
            })
          }

          sectionSettings.push({name: item.name, settings: sectionChildSettings, blocks: blocks});
          // el.presets ? el.presets[0]?.blocks && el.presets[0].blocks.length 
          // ? sectionSettings.push({name: el.name, settings: sectionChildSettings, blocks: el.presets[0].blocks}) 
          // : sectionSettings.push({name: el.name, settings: sectionChildSettings, blocks: []})
          // : sectionSettings.push({name: el.name, settings: sectionChildSettings, blocks: []});

        }
      });
    });
  }


  res.render('view', {
    menu: makeMenu,
    shop: shop,
    collection: collection,
    product: product,
    cart: cart,
    settings: settings,
    sections: sectionSettings
  });

});


/* POST theme settings and sections for Iframe View. */
router.post('/:id', async (req, res, next) => {
  const {id} = req.params;
  const {settings, section, blocks} = req.body;
  const {page, global} = req.query;
  const sectionHandle = req.query.section;
  var theme = '', sections = '', pageResult = '';
  var defaultSettings = {}, defaultSections = [];
  if(!id || !page) return next();
  if(!settings?.length && !section?.length) return next();

  try{
    theme = await themesModel.findById(id).exec();
    if(!theme) return next();
    pageResult = await pagesModel.findOne({theme_id: theme._id, name: page}).exec();
    if(!pageResult) return next();
    sections = await sectionsModel.findOne({theme_id: theme._id}).exec();
  } catch (err){
    next(err);
  }
  
  
  theme?.settings && theme.settings.map(el => {
      if(el.settings){
          for(var k in el.settings) {
            settings?.length ? Object.keys(settings[0]).length && settings[0][el.settings[k].id]
            ? defaultSettings[el.settings[k].id] = settings[0][el.settings[k].id]
            : defaultSettings[el.settings[k].id] = el.settings[k].default
            : defaultSettings[el.settings[k].id] = el.settings[k].default;            
          }
      }
  });

  if(sectionHandle){
    sections?.sections && sections.sections.map(el => {
      if(el.name === sectionHandle){
        let sectionChildSettings = {};
        let blocks = [];
        if(el.settings){
          for(var k in el.settings) {
              sectionChildSettings[el.settings[k].id] = el.settings[k].default;
          }
        }
      
        // el.presets ? el.presets[0]?.blocks && el.presets[0].blocks.length 
        // ? defaultSections.push({name: el.name, settings: sectionChildSettings, blocks: el.presets[0].blocks}) 
        // : defaultSections.push({name: el.name, settings: sectionChildSettings, blocks: []})
        // : defaultSections.push({name: el.name, settings: sectionChildSettings, blocks: []});

        if(el?.blocks?.length){
          el.blocks.forEach((block, index)=>{
            blocks[index] = {type: block.type, settings:{}};
            if(block && block?.settings){
              for(var i in block.settings){
                blocks[index].settings[block.settings[i].id] = block.settings[i].default;
              }
            }
          })
        }

        defaultSections.push({name: el.name, settings: sectionChildSettings, blocks: blocks});

      }
    });
  } else if(global !== 'Cart'){
    pageResult.sections.map(item => {
      sections?.sections && sections.sections.map(el => {
        if(item.name === el.name){
          let sectionChildSettings = {};
          let blocks = [];
          if(el.settings){
            for(var k in el.settings) {
                sectionChildSettings[el.settings[k].id] = el.settings[k].default;
            }
          }
        
          // el.presets ? el.presets[0]?.blocks && el.presets[0].blocks.length 
          // ? defaultSections.push({name: el.name, settings: sectionChildSettings, blocks: el.presets[0].blocks}) 
          // : defaultSections.push({name: el.name, settings: sectionChildSettings, blocks: []})
          // : defaultSections.push({name: el.name, settings: sectionChildSettings, blocks: []});

          if(el?.blocks?.length){
            el.blocks.forEach((block, index)=>{
              blocks[index] = {type: block.type, settings:{}};
              if(block && block?.settings){
                for(var i in block.settings){
                  blocks[index].settings[block.settings[i].id] = block.settings[i].default;
                }
              }
            })
          }
  
          defaultSections.push({name: item.name, settings: sectionChildSettings, blocks: blocks});

        }
      });
    });
  }

  if(section?.length || blocks?.length){  
    defaultSections.forEach(item => {
      if(section?.length && item.name === section[0].name){ 
        item.settings = section[0].settings;
      }
      if(blocks?.length && item?.blocks?.length){
        item.blocks = blocks;
      }
    });
  }
  
  res.render('view', {
    menu: makeMenu,
    shop: shop,
    collection: collection,
    product: product,
    cart: cart,
    settings: defaultSettings,
    sections: defaultSections
  });

});

module.exports = router;
