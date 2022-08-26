const express = require('express');
const router = express.Router();
const storage = require('node-localstorage').LocalStorage;
const make = require('../contents/make');
const modelThemes = require('../models/themes');
const fonts = require('../contents/fonts');
const localStorage = new storage('./scratch');

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
},



/* GET Theme Settings and Sections. */
router.get('/:id', async (req, res, next) => {

  const {id} = req.params;
  const {page, global, section} = req.query;
  const storageData = localStorage.getItem('theme');
  const localData = storageData ? JSON.parse(storageData) : null;

  if(!id || !page) return next();

  try {
    const theme = await modelThemes.find().exec();
    console.log(theme);
    if(!theme) return next();

    const getRandomElement = () => {
      let elemets1=['header','nav', 'main', 'footer'];
      let elemets2=['header','nav', 'main', 'footer'];
    
      var number1=getRandomInt(4);
      
      do {
        var number2 = getRandomInt(4);
      } while(number1 === number2);
      return [elemets1[number1], elemets2[number2]];
    };

    const merge = getRandomElement();

    const settings = theme.theme_set;

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

    const pageSections = theme.theme_pag.filter(item => { if(item.name === page) return item.items});
    const sections = []; 
    theme.theme_sec.filter(section => {pageSections[0].items.forEach(item => {if(item.name === section.name) return sections.push(section)})});
    if(localData?.sections?.length && sections){
      sections.forEach(section => {
        const findLocalSection = localData?.sections?.filter(localSection => localSection.name === section.name);
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
    const pageNames = []; 
    theme.theme_pag.forEach(item => pageNames.push({name:item.name}));

    res.render('random', {
      user: req?.session?.user || null,
      isAdmin: req?.session?.user?.isAdmin || null, 
      make: make, 
      id: theme._id,
      page: page,
      fonts: fonts,
      localData: localData,
      settings: settings,
      sections: sections,
      pageNames: pageNames
    });

  } catch (err){
    return next(err);
  }

});

module.exports = router;
