const express = require('express');
const router = express.Router();
const themesModel = require('../models/themes');

/* GET GLOBAL SETTINGS ITEM (COLOR FONT PADDING AND ETC) */
router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  const {global, item_id} = req.query;
  if(!id || !global || !item_id) return next();

  let theme = '';

  try{
    theme = await themesModel.findById(id).exec();
    if(!theme) return next();
  } catch (err){
    return next(err);
  }

  const settingsList = theme.settings.filter(item => item.name === global);
  if(!settingsList.length) return next();
  const settingItem = settingsList[0].settings.filter(item => item.label === item_id);
  if(!settingItem.length) return next();
  
  res.render('make/get', { 
    setting: settingItem[0]
  });

});

module.exports = router;
