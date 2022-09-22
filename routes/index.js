const express = require('express');
const path = require('path');
const router = express.Router();
const make = require('../contents/make');
const modelThemes = require('../models/themes');
const modelUsersThemes = require('../models/customer-themes');

// const themeJsonDB = require('../base-kotn.json');
// const themeSectionsFolder = require('../themes/base-kotn/sections');

// const themeJson = require('../base-kotn.json');
// const themeConfif = require('../themes/base-kotn/locales/en.default.schema.json');

// const fonts = require('../contents/fonts.json');

// const fs = require('fs');

/* GET All Themes and User Themes. */
router.get('/', async (req, res, next) => {

  // Automaticly add shopify theme sections Schema Settings to app DB Code generator
  // themeJsonDB.theme_sec = [];
  // try {
  //   let sectionDirectory = await fs.readdirSync(path.join(__dirname, '../themes/base-kotn/sections'));
  //   for(let file of sectionDirectory){
  //     let fileContent = await fs.readFileSync(path.join(__dirname, `../themes/base-kotn/sections/${file}`), 'utf-8');
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
  //   let res = await fs.writeFileSync(path.join(__dirname, '../base-kotn.json'), JSON.stringify(themeJsonDB, null, 2), 'utf-8');
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
  // fs.writeFileSync(path.join(__dirname, '../base-kotn.json'), JSON.stringify(themeJson, null, 2), 'utf-8');
  // return next();


  // FONTS FUNCTION
  // const currentFonts = [];
  // try {
  //   if(currentFonts?.length){
  //     for(let i=0; i<currentFonts?.length; i++){
  //       let currentfontItem = currentFonts[i];
  //       let findHeading = fonts?.items?.filter(item => item.family === currentfontItem?.heading);
  //       let findBody = fonts?.items?.filter(item => item.family === currentfontItem?.body);
  //       if(findHeading.length === 0){
  //         fonts?.items.push({"family": currentfontItem?.heading});
  //       }
  //       if(findBody.length === 0){
  //         fonts?.items.push({"family": currentfontItem?.body});
  //       }
  //     }
  //   }
  //   if(fonts?.items?.length){
  //     fs.writeFileSync(path.join(__dirname, '../contents/fonts.json'), JSON.stringify(fonts, null, 2), 'utf-8');
  //   }
  // } catch (err){
  //   console.log(err);
  // }


  // Automaticly change liquid to ejs format Function
  // try {
  //   let sectionDirectory = await fs.readdirSync(path.join(__dirname, '../themes/632a6f7db34039b04f77d3b1/snippets'));
  //   for(let file of sectionDirectory){
  //     let fileContent = await fs.readFileSync(path.join(__dirname, `../themes/632a6f7db34039b04f77d3b1/snippets/${file}`), 'utf-8');
  //     if(fileContent){
  //       fileContent = fileContent.replaceAll("{%-", "<%");
  //       fileContent = fileContent.replaceAll("{%", "<%");
  //       fileContent = fileContent.replaceAll("-%}", "%>");
  //       fileContent = fileContent.replaceAll("%}", "%>");
  //       fileContent = fileContent.replaceAll("{{", "<%=");
  //       fileContent = fileContent.replaceAll("}}", "=%>");
  //       fileContent = fileContent.replaceAll("<% for block in section.blocks %>", "<% section.blocks?.forEach((block,index)=>{ %>");
  //       fileContent = fileContent.replaceAll("% case ", "% if(");
  //       fileContent = fileContent.replaceAll("% endcase %", "% } %");
  //       fileContent = fileContent.replaceAll("% endfor %", "% }) %");
  //       fileContent = fileContent.replaceAll("% when ", "% } else if(block.type === ");
  //       fileContent = fileContent.replaceAll("% if ", "% if(");
  //       fileContent = fileContent.replaceAll("% else %", "% } else { %");
  //       fileContent = fileContent.replaceAll("% else%", "% } else { %");
  //       fileContent = fileContent.replaceAll("%else%", "% } else { %");
  //       fileContent = fileContent.replaceAll("%else %", "% } else { %");
  //       fileContent = fileContent.replaceAll("| divided_by:", "/");
  //       fileContent = fileContent.replaceAll("| plus:", "+");
  //       fileContent = fileContent.replaceAll("| minus:", "-");
  //       fileContent = fileContent.replaceAll("| times:", "*");
  //       fileContent = fileContent.replaceAll("endif", "}");
  //       fileContent = fileContent.replaceAll("<%= '", "<%=");
  //       fileContent = fileContent.replaceAll("' | t =%>", "%>");
  //       fileContent = fileContent.replaceAll(" %>", "){ %>");
  //       fileContent = fileContent.replaceAll("=%>", "%>");
  //       fileContent = fileContent.replaceAll("% })){ %", "% }) %");
  //       fileContent = fileContent.replaceAll("% }){ %", "% } %");
  //       fileContent = fileContent.replaceAll("% } else {){ %", "% } else { %");
  //       fileContent = fileContent.replaceAll("=>{){ %", "=>{ %");
  //       fileContent = fileContent.replaceAll("<%=' '%>", "");
  //       fileContent = fileContent.replaceAll("'%>", "'){ %>");
  //       fileContent = fileContent.replaceAll("block.settings.", "block?.settings?.");
  //       fileContent = fileContent.replaceAll(" == ", " === ");
  //       fileContent = fileContent.replaceAll("| img_url: '150x'", "");
  //       fileContent = fileContent.replaceAll("| img_url: '350x'", "");
  //       fileContent = fileContent.replaceAll("| img_url: '700x'", "");
  //       fileContent = fileContent.replaceAll("| img_url: '749x'", "");
  //       fileContent = fileContent.replaceAll("| img_url: '1498x'", "");
  //       fileContent = fileContent.replaceAll("| img_url: '1100x'", "");
  //       fileContent = fileContent.replaceAll("| img_url: '2200x'", "");
  //       fileContent = fileContent.replaceAll(" != ", " !== ");
  //       fileContent = fileContent.replaceAll(" and ", " && ");
  //       fileContent = fileContent.replaceAll(" or ", " || ");
  //       fileContent = fileContent.replaceAll(" | escape", "");
  //       fileContent = fileContent.replaceAll(" | date: ", " new Date() ");
  //       // fileContent = fileContent.replaceAll("% render '", "%- include('../snippets/");
  //       fileContent = fileContent.replaceAll("% render '", "%- include('./");
  //       fileContent = fileContent.replaceAll("assign", "var");
  //       fileContent = fileContent.replaceAll(" | append: ", " + ");
  //       fileContent = fileContent.replaceAll("% paginate ", "%# paginate ");
  //       fileContent = fileContent.replaceAll("% endpaginate", "%# endpaginate");
  //       fileContent = fileContent.replaceAll("% liquid", "%");
  //       fileContent = fileContent.replaceAll(" contains ", ".includes(");
  //       fileContent = fileContent.replaceAll("% elsif ", "% } else if(");
  //       fileContent = fileContent.replaceAll("| t %", "%");
  //       fileContent = fileContent.replaceAll("% endform){ %", "/form");
  //       fileContent = fileContent.replaceAll("<% javascript){ %>", "<script>");
  //       fileContent = fileContent.replaceAll("<% endjavascript){ %>", "</script>");
  //       fileContent = fileContent.replaceAll("<% style){ %>", "<style>");
  //       fileContent = fileContent.replaceAll("<% endstyle){ %>", "</style>");
  //       fileContent = fileContent.replaceAll(" !== blank", "");
  //       fileContent = fileContent.replaceAll(" | money", "");
  //       fileContent = fileContent.replaceAll(".size", ".length");
  //       fileContent = fileContent.replaceAll(" | split: ", "?.split(");
  //       fileContent = fileContent.replaceAll(" | last", "?.pop()");
  //       fileContent = fileContent.replaceAll(" | slice: ", "?.slice(");
  //       fileContent = fileContent.replaceAll(" | strip", "?.trim()");
  //       fileContent = fileContent.replaceAll(" | downcase", ".toLowerCase()");
  //       fileContent = fileContent.replaceAll(" | capitalize", "");
  //       fileContent = fileContent.replaceAll("| default:", "||");
  //       fileContent = fileContent.replaceAll("| ceil", "Math.ceil()");
  //       fileContent = fileContent.replaceAll("| asset_url", "<%=srcId%>");
  //       fileContent = fileContent.replaceAll("sections.", "sectionst.");
  //       fileContent = fileContent.replaceAll("% unless ", "% if(!");
  //       fileContent = fileContent.replaceAll("% endunless){ %", "% } %");
  //       fileContent = fileContent.replaceAll("% break){ %", "% return %");
  //       fileContent = fileContent.replaceAll("forloop.index", "index");
  //       fileContent = fileContent.replaceAll(" | uppercase", "?.toUpperCase()");
  //       fileContent = fileContent.replaceAll(" | json", "");
  //     }
  //     await fs.writeFileSync(path.join(__dirname, `../views/632a6f7db34039b04f77d3b1/snippets/${file.replace('.liquid', '.ejs')}`), fileContent, 'utf-8');
  //   }
  //   console.log("DONEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");

  //   return next();
  // } catch (err) {
  //   return next(err);
  // }

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
