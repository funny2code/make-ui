const express = require('express');
const router = express.Router();
const modelThemes = require('../models/Themes');

/* GET GLOBAL SETTINGS ITEM (COLOR FONT PADDING AND ETC) */
router.get('/:id', async (req, res, next) => {

  const { id } = req.params;
  const { global, item_id } = req.query;

  if (!id || !global || !item_id) return next();

  try {

    const theme = await modelThemes.findById(id).exec();
    if(!theme) return next();

    const settingsList = theme.theme_set.filter(item => item.name === global);
    if(!settingsList.length) return next();
    const settingItem = settingsList[0].settings.filter(item => item.label === item_id);
    if(!settingItem.length) return next();

    res.render('make/get', {
      setting: settingItem[0]
    });

  } catch (err) {
    return next(err);
  }

});

module.exports = router;
