const express = require('express');
const router = express.Router();
const make = require('../config/make');
const themesModel = require('../models/themes');
const sectionsModel = require('../models/sections');

/* GET users listing. */
router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  if(!id) return next();

  let theme = '';
  let sections = '';

  try{
    theme = await themesModel.findById(id).exec();
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
    sections?.sections && sections.sections.map(el => {
        const sectionChildSettings = {};
        if(el.settings){
            for(var k in el.settings) {
                sectionChildSettings[el.settings[k].id] = el.settings[k].default;
            }
        }
        sectionSettings.push({name: el.name, settings: sectionChildSettings });
    });

  res.render('view',{
      settings: settings,
      sections: sectionSettings
  });

});

module.exports = router;
