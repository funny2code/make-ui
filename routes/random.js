const express = require('express');
const router = express.Router();
const storage = require('node-localstorage').LocalStorage;
const querystring = require('node:querystring');
const make = require('../contents/make');
const modelThemes = require('../models/themes');
const fonts = require('../contents/fonts');




/* GET Theme Settings and Sections. */
router.get('/', async (req, res, next) => {

  const {page} = req.query;

  if(!page) return next();

  try {

    const themes = await modelThemes.find().exec();
    if(!themes?.length) return next();

    const sections = [];

    
    const allThemesPage = themes?.map(theme => theme?.theme_pag?.filter(item => item.name === page));
    const allThemesPageItmes = allThemesPage?.flat()?.map(item => item.items);
    const set = new Set();
    const allThemesPageSections = allThemesPageItmes?.flat()?.filter(item => !set.has(item.handle) && set.add(item.handle));
    for (let i = 0; i < allThemesPageSections.length; i++) {
      if (allThemesPageSections[i].name == "footer") {
         let temp = allThemesPageSections[i];
         allThemesPageSections.splice(i, 1);
         allThemesPageSections.push(temp);
         break;
      }
    }

    const getSectionRandomFun = async (handle) => {
      let randomThemeIndex = Math.floor(Math.random() * themes?.length);
      let theme = themes[randomThemeIndex];
      let findSection = theme?.theme_sec?.filter(section => section.file_name === handle);
      if(findSection?.length) findSection[0].theme_id = theme._id;
      findSection?.length ? sections.push(findSection[0]) : await getSectionRandomFun(handle);
    };


    const getSettingsRandomFun = async () => {
      let randomThemeIndex = Math.floor(Math.random() * themes?.length);
      let theme = themes[randomThemeIndex];
      return theme?.theme_set;
    };
    

    const settings = await getSettingsRandomFun();
    

    allThemesPageSections?.forEach(async (item) => {
      await getSectionRandomFun(item.handle);
    });

    const pageNames = []; 
    themes[0]?.theme_pag?.forEach(item => pageNames.push({name:item.name}));

    res.render('random', {
      user: req?.session?.user || null,
      isAdmin: req?.session?.user?.isAdmin || null, 
      make: make, 
      id: themes[0]._id,
      page: page,
      fonts: fonts,
      settings: settings,
      sections: sections,
      pageNames: pageNames
    });

  } catch (err){
    return next(err);
  }

});

module.exports = router;
