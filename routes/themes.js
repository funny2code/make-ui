const express = require('express');
const router = express.Router();
const storage = require('node-localstorage').LocalStorage;
const make = require('../contents/make');
const modelThemes = require('../models/themes');
const fonts = require('../contents/fonts');
const localStorage = new storage('./scratch');

/* GET Theme Settings and Sections. */
router.get('/:id', async (req, res, next) => {

  const {id} = req.params;
  const {page, global, section} = req.query;
  const storageData = localStorage.getItem('theme');
  const localData = storageData ? JSON.parse(storageData) : null;

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

    // console.log(settings);

    if(localData?.settings){
      settings?.forEach(el => {
        if(el?.settings){
          for (var k in el.settings) {
            if(localData?.settings[el.settings[k].id]) el.settings[k].default = localData?.settings[el.settings[k].id]
          }
        }
      })
    }
  
    const sections = section ? theme.theme_sec.filter(item => item.file_name === section) : null;
    if(localData?.sections?.length && sections){
      sections.forEach(section => {
        const findLocalSection = localData?.sections?.filter(localSection => localSection.file_name === section.file_name);
        if(findLocalSection?.length){
          if(section?.settings){
            for (var k in section.settings) {
              if(findLocalSection[0]?.settings[section.settings[k].id]) section.settings[k].default = findLocalSection[0]?.settings[section.settings[k].id];
            }
          }
          if(section?.blocks?.length){
            section.blocks?.forEach(block => {
              const findLocalBlock = findLocalSection[0]?.blocks?.filter(localBlock => localBlock.type === block.type);
              if(findLocalBlock?.length){
                for (var k in block.settings) {
                  console.log(findLocalBlock[0]?.settings[block.settings[k].id], block.settings[k].default);
                  if(findLocalBlock[0]?.settings[block.settings[k].id]) block.settings[k].default = findLocalBlock[0]?.settings[block.settings[k].id];
                }
              }
            });
          }
        }
      })
    }
    const pageSections = theme.theme_pag.filter(item => { if(item.name === page) return item.items});
    const pageNames = []; 
    theme.theme_pag.forEach(item => pageNames.push({name:item.name}));


    res.render('theme', {
      user: req?.session?.user || null,
      isAdmin: req?.session?.user?.isAdmin || null, 
      make: make, 
      id: theme._id,
      srcId: theme._id,
      page: page,
      sidebar: theme.app_sid || null,
      fonts: fonts,
      localData: localData,
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
