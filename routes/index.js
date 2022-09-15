const express = require('express');
const path = require('path');
const router = express.Router();
const make = require('../contents/make');
const modelThemes = require('../models/themes');
const modelUsersThemes = require('../models/customer-themes');
// const themeJson = require('../themejson.json');
// const themeConfif = require('../themes/6306f8e7db2cbec8c440f780/locales/en.default.schema.json');
const fs = require('fs');


/* GET All Themes and User Themes. */
router.get('/', async (req, res, next) => {

  // themeJson?.theme_sec?.forEach(item => {
  //   let sectionName = item?.name?.toLowerCase()?.replaceAll(' ', '-');
  //   item?.settings?.forEach(setItem => {
  //     if(themeConfif.sections[sectionName]?.settings){
  //       if(themeConfif.sections[sectionName]?.settings[setItem?.id] && setItem?.type === "select"){
  //         setItem?.options?.forEach((option,index) => {
  //           let i = index + 1;
  //           if(themeConfif.sections[sectionName]?.settings[setItem?.id]['options__' + i]) option.label = themeConfif.sections[sectionName]?.settings[setItem?.id]['options__' + i]?.label;
  //         })
  //         if(themeConfif.sections[sectionName]?.settings[setItem?.id]?.label) setItem.label = themeConfif.sections[sectionName]?.settings[setItem?.id]?.label;
  //         if(themeConfif.sections[sectionName]?.settings[setItem?.id]?.info) setItem.info = themeConfif.sections[sectionName]?.settings[setItem?.id]?.info;
  //       } else if(themeConfif.sections[sectionName]?.settings[setItem?.id]){
  //         if(themeConfif.sections[sectionName]?.settings[setItem?.id]?.label) setItem.label = themeConfif.sections[sectionName]?.settings[setItem?.id]?.label;
  //         if(themeConfif.sections[sectionName]?.settings[setItem?.id]?.info) setItem.info = themeConfif.sections[sectionName]?.settings[setItem?.id]?.info;
  //         if(themeConfif.sections[sectionName]?.settings[setItem?.id]?.unit) setItem.unit = themeConfif.sections[sectionName]?.settings[setItem?.id]?.unit;
  //       }
  //     }  
  //   });
  //   console.log(item?.settings);
  //   item?.blocks?.forEach(block => {
  //     let blockName = block?.type?.toLowerCase()?.replaceAll(' ', '-');
  //     if(themeConfif.sections[sectionName]?.blocks){
  //       if(themeConfif.sections[sectionName]?.blocks[blockName]){
  //         if(themeConfif.sections[sectionName]?.blocks[blockName]?.name) block.name = themeConfif.sections[sectionName]?.blocks[blockName]?.name;
  //         if(themeConfif.sections[sectionName]?.blocks[blockName]?.settings){
  //           block?.settings?.forEach(setBlock => {
  //             if(themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id] && setBlock?.type === "select"){
  //               setBlock?.options?.forEach((option,index) => {
  //                 let i = index + 1;
  //                 if(themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]['options__' + i]) option.label = themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]['options__' + i]?.label;
  //               })
  //               if(themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]?.label) setBlock.label = themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]?.label;
  //               if(themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]?.info) setBlock.info = themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]?.info;
  //             } else if(themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]){
  //               if(themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]?.label) setBlock.label = themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]?.label;
  //               if(themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]?.info) setBlock.info = themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]?.info;
  //               if(themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]?.unit) setBlock.unit = themeConfif.sections[sectionName]?.blocks[blockName]?.settings[setBlock?.id]?.unit;
  //             }
  //           });
  //         }
  //       }
        
  //     }  
  //   });
  // });
  // fs.writeFileSync(path.join(__dirname, `../themejson.json`), JSON.stringify(themeJson, null, 2), 'utf-8');

  try {
    const Themes = await modelThemes.find({}, '_id, theme_set');
    const UsersThemes = req.session.user ? await modelUsersThemes.find({user_id: req.session.user._id}, '_id theme_set').exec() : null; 

    res.render('index', {
      user: req?.session?.user || null, 
      make: make, 
      themes: Themes,
      usersThemes: UsersThemes
    });

  } catch (err){
    return next(err);
  }

});

module.exports = router;
