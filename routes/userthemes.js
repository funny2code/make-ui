const express = require('express');
const router = express.Router();
const make = require('../config/make');
const modelUsersThemes = require('../models/customer-themes');
const fonts = require('../config/fonts');

/* GET users listing. */
router.get('/:userId/themes/:themeId', async (req, res, next) => {

  const { userId, themeId } = req.params;
  const { page, global, section } = req.query;
  if (!userId || !themeId || !req.session.user || !page || userId !== req?.session?.user?._id) return next();

  const activeType = global ? 'global' : 'section';
  const active = global ? global : section;


  try {

    const theme = await modelUsersThemes.findById(themeId).exec();
    if (!theme) return next();

    const settings = global ? global !== 'Global Styles'
      ? theme.theme_set.filter(item => item.name === global)
      : theme.theme_set.filter(item => item.name === 'theme_info' || item.name === global)
      : null;

    const sections = section ? theme.theme_sec.filter(item => item.name === section) : null;
    const pageSections = theme.theme_pag.filter(item => { if (item.name === page) return item.items });
    const pageNames = [];
    theme.theme_pag.forEach(item => pageNames.push({ name: item.name }));

    res.render('theme', {
      user: req?.session?.user || null,
      isAdmin: false,
      make: make,
      id: theme._id,
      page: page,
      sidebar: theme.app_sid || null,
      fonts: fonts,
      localData: false,
      settings: settings,
      section: sections ? sections[0] : null,
      pageNames: pageNames,
      pageSections: pageSections[0].items,
      active: active,
      activeType: activeType
    });

  } catch (err) {
    return next(err);
  }

});

module.exports = router;
