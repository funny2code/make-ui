const express = require('express');
const router = express.Router();
const themesModel = require('../models/themes');
const sectionsModel = require('../models/sections');



/* POST SAVE FUNCTION */
router.post('/:id', async (req, res, next) => {
  const {id} = req.params;
  const {settings, section} = req.body;
  var theme = '', themeSections = '';
  if(!id) return next();
  if(!settings?.length && !section?.length) return next();

  try{
    theme = await themesModel.findById(id).exec();
    if(!theme) return next();
    themeSections = await sectionsModel.findOne({theme_id: theme._id}).exec();
    if(section && !themeSections) return res.sendStatus(500).send("error");
  } catch (err){
    return next(err);
  }
  

  // Theme Global Settings Save Function  
  if(settings?.length && theme?.settings){

    theme.settings.map(el => {
        if(el.settings){
            el.settings.map(oldItem => {
                Object.entries(settings[0]).forEach(newItem => {
                    if(oldItem.id === newItem[0] && oldItem?.default && newItem[1] && newItem[1] !== ""){
                        oldItem.default = oldItem?.type === "range" ? parseInt(newItem[1]) : newItem[1];
                    }
                })
            })
        } else {
            Object.entries(settings[0]).forEach(newItem => {
                if(newItem[0] === "theme_name" && el.theme_name && newItem[1] && newItem[1] !== ""){
                    el.theme_name = newItem[1];
                }
            })
        }
    });
    
    try {
       let newTheme = await themesModel.findByIdAndUpdate(id, {settings: theme.settings}, {new: true});
       if(!newTheme) return res.sendStatus(500).send("error");
    } catch(err){
        return next(err);
    }

  }

  // Theme Section Settings Save Function
  if(section?.length && themeSections?.sections){
    themeSections.sections.map(el => {
        if(el.name === section[0]?.name){
            if(el.settings){
                el.settings.map(oldItem => {
                    Object.entries(section[0]?.settings).forEach(newItem => {
                        if(oldItem.id === newItem[0] && oldItem?.default && newItem[1] && newItem[1] !== ""){
                            oldItem.default = oldItem?.type === "range" ? parseInt(newItem[1]) : newItem[1];
                        }
                    })
                })
            }
        }
    });

    try {
        let newSectionSettings = await sectionsModel.findOneAndUpdate({theme_id: theme._id}, {sections: themeSections.sections}, {new: true});
        if(!newSectionSettings) return res.sendStatus(500).send("error");
    } catch(err){
        return next(err);
    }

  }

  res.status(200).send('success');

});

module.exports = router;
