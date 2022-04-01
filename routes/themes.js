const express = require('express');
const router = express.Router();
const make = require('../config/make');
const themesModel = require('../models/themes');
const UsersthemeModel = require('../models/usersTheme');
const sectionsModel = require('../models/sections');
const UsersSectionModel = require('../models/usersSection');
const pagesModel = require('../models/pages');
const UsersPageModel = require('../models/usersPage');
const fonts = require('../config/fonts');

/* GET users listing. */
router.get('/:id', async (req, res, next) => {
  const {id} = req.params;
  const {page, global, section} = req.query;
  if(!id || !page) return next();

  let theme = '';
  let allPageNames= '';
  let pageResult = ''; 
  let sectionsResult = '';
  let activeType = global ? 'global' : 'section';
  let active = global ? global : section;

  
  try{
    theme = await themesModel.findById(id).exec();
    if(!theme) return next();
    allPageNames = await pagesModel.find({}, 'name').exec();
    if(!allPageNames) return next();
    pageResult = await pagesModel.findOne({theme_id: theme._id, name: page}).exec();
    if(!pageResult) return next();
    sectionsResult = await sectionsModel.findOne({theme_id: theme._id}).exec();
    if(req.session.user){
      userTheme = await UsersthemeModel.findOne({user_id: req.session.user._id}).exec();
      if(!userTheme){
        const userTheme = await new UsersthemeModel({
          user_id: req.session.user._id,
          settings: theme?.settings,
          sidebar: theme?.sidebar,
        });
        userTheme.save((err, result) => {
          if(err) return next();
          theme = result;
        });
        const userPageNames = await new UsersPageModel({
          user_id: req.session.user._id,
          theme_id: userTheme._id,
          name: pageResult?.name,
          sections: pageResult?.sections
        });
        userPageNames.save((err, result) => {
          if(err) return next();
          pageResult = result;
        });
        const userSectionsResult = await new UsersSectionModel({
          user_id: req.session.user._id,
          theme_id: userTheme._id,
          sections: sectionsResult?.sections
        });
        userSectionsResult.save((err, result) => {
          if(err) return next();
          sectionsResult = result;
        });
      } else {
        theme = userTheme;
        pageResult = await UsersPageModel.findOne({theme_id: theme._id, name: page}).exec();
        sectionsResult = await UsersSectionModel.findOne({theme_id: theme._id}).exec();
      }
    }
  } catch (err){
    return next(err);
  }

  const settings = global ? global !== 'Global Styles' 
  ? theme.settings.filter(item => item.name === global)
  : theme.settings.filter(item => item.name === 'theme_info' || item.name === global)
  : null;

  const sections = section ? sectionsResult.sections.filter(item => item.name === section) : null;
  
  res.render('theme', {
    user: req?.session?.user || null, 
    make: make, 
    id: theme._id,
    page: page,
    sidebar: theme?.sidebar ? theme.sidebar : null,
    fonts: fonts,
    settings: settings ? settings : null,
    section: sections ? sections[0] : null,
    pageNames: allPageNames,
    pageSections: pageResult?.sections ? pageResult?.sections :null,
    active: active,
    activeType: activeType
  });

});

module.exports = router;
