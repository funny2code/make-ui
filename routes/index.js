const express = require('express');
const path = require('path');
const router = express.Router();
const make = require('../contents/make');
const modelThemes = require('../models/themes');
const modelUsersThemes = require('../models/customer-themes');
// const themeJsonDB = require('../dawn-theme.json');
// const themeSectionsFolder = require('../themes/6306f8e7db2cbec8c440f780/sections');
// const themeJson = require('../dawn-theme.json');
// const themeConfif = require('../themes/6306f8e7db2cbec8c440f780/locales/en.default.schema.json');
// const fs = require('fs');

/* GET All Themes and User Themes. */
router.get('/', async (req, res, next) => {

  console.log('IP: ' + JSON.stringify(req.ip));
  // Automaticly add shopify theme sections Schema Settings to app DB Code generator
  // themeJsonDB.theme_sec = [];
  // try {
  //   let sectionDirectory = await fs.readdirSync(path.join(__dirname, '../themes/6306f8e7db2cbec8c440f780/sections'));
  //   for(let file of sectionDirectory){
  //     let fileContent = await fs.readFileSync(path.join(__dirname, `../themes/6306f8e7db2cbec8c440f780/sections/${file}`), 'utf-8');
  //     if(fileContent){
  //       let splitFileContent = fileContent.replace('{% endschema %}', '').split('{% schema %}');
  //       if(splitFileContent.length > 1){
  //         let parseDBSection = JSON.parse(splitFileContent[1]);
  //         parseDBSection.file_name = file?.replace('.liquid', '');
  //         parseDBSection.template_name = file?.includes('customer') || file?.includes('header') || file?.includes('footer') || file?.includes('announcement') || file?.includes('customer') || file?.includes('gift') 
  //         ? "config/settings_data" : "templates/index";
  //         themeJsonDB.theme_sec.push(parseDBSection);
  //       }
  //     }
  //   }
  //   let res = await fs.writeFileSync(path.join(__dirname, '../dawn-theme.json'), JSON.stringify(themeJsonDB, null, 2), 'utf-8');
  //   console.log(res);

  //   return next();
  // } catch (err) {
  //   return next(err);
  // }
  

  // Automaticly add shopify theme languaje translate function
  // themeJson?.theme_sec?.forEach(item => {
  //   let sectionName = item?.file_name;
  //   item.name = themeConfif.sections[sectionName]?.name;
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
  // fs.writeFileSync(path.join(__dirname, '../dawn-theme.json'), JSON.stringify(themeJson, null, 2), 'utf-8');
  // return next();

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
