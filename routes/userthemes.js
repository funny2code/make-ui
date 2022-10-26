const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;
const modelUsersThemes = require('../models/customer-themes');
const make = require('../contents/make');
const fonts = require('../contents/fonts');

/* GET users listing. */
router.get('/:userId/themes/:themeId', async (req, res, next) => {

  const { userId, themeId } = req.params;
  const page_handle = req.query.page;
  const settings_handle = req.query.settings;
  const section_handle = req.query.section;
  const section_id = req.query.section_id;

  if (!userId || !themeId || !req.session.user || userId !== req?.session?.user?._id) return next();

  const activeType = (settings_handle || section_handle) ? settings_handle ? 'settings' : 'section' 
  : (page_handle?.includes('customer') || page_handle?.includes('gift-card')) ? 'liquid' : null;
  const active = (settings_handle || section_handle) 
  ? settings_handle ? settings_handle : section_handle
  : (page_handle?.includes('customer') || page_handle?.includes('gift-card')) ? page_handle : null;


  try {

    const theme = await modelUsersThemes.findById(themeId).exec();
    if(!theme) return next();

    const settingsSchema = settings_handle ? (settings_handle !== 'global-styles') 
    ? theme.settings_schema.filter(item => item.name?.replace(' ', '-')?.toLowerCase() === settings_handle)
    : theme.settings_schema.filter(item => item.name?.replace(' ', '-')?.toLowerCase() === 'theme_info' || item.name?.replace(' ', '-')?.toLowerCase() === settings_handle)
    : null;
    
    const settingsFile = await fs.readFile(path.join(__dirname, `../users/user-${userId}/theme-${themeId}/config/settings_data.json`), 'utf-8');
    if(!settingsFile) return next();
    const settings = JSON.parse(settingsFile);
    const getPage = page_handle && theme?.pages?.filter(page => page.handle === page_handle);
    const sectionsFile = getPage?.length && await fs.readFile(path.join(__dirname, `../users/user-${userId}/theme-${themeId}/${getPage[0]?.template_name}.json`), 'utf-8');
    const parseSections = sectionsFile && JSON.parse(sectionsFile);
    const sectionSchema = section_handle 
    ? theme?.sections_schema?.filter(section => section.file_name === section_handle) 
    : (page_handle?.includes('customer') || page_handle?.includes('gift-card')) 
    ? theme?.sections_schema?.filter(section => section.file_name === page_handle)
    : null;
    const section = (section_handle && section_id) 
    ? parseSections?.sections[section_id] : section_handle 
    ? settings?.current?.sections[section_handle] 
    : (page_handle?.includes('customer') || page_handle?.includes('gift-card')) 
    ? parseSections?.current?.sections[page_handle] 
    : null;

    res.render('theme', {
      user: req?.session?.user || null,
      isAdmin: req?.session?.user?.isAdmin || null,
      userThemeView: true,
      settingsSchema: settingsSchema,
      settings: settings?.current || null, 
      sectionsSchema: theme?.sections_schema || null,
      sections: parseSections,
      sectionSchema: sectionSchema,
      section: section,
      make: make,
      id: theme._id,
      page_handle: page_handle,
      fonts: fonts,
      pages: theme?.pages || null,
      active: active,
      section_id: section_id || null,
      activeType: activeType
    });

  } catch (err) {
    return next(err);
  }

});

/* POST users listing. */
router.post('/:userId/themes/:themeId', async (req, res, next) => {

  const { userId, themeId } = req.params;
  const {settings_data, templates} = req.body;
  const page_handle = req.query.page;
  const settings_handle = req.query.settings;
  const section_handle = req.query.section;
  const section_id = req.query.section_id;

  if (!userId || !themeId || !req.session.user || userId !== req?.session?.user?._id) return next();

  const activeType = (settings_handle || section_handle) ? settings_handle ? 'settings' : 'section' 
  : (page_handle?.includes('customer') || page_handle?.includes('gift-card')) ? 'liquid' : null;
  const active = (settings_handle || section_handle) 
  ? settings_handle ? settings_handle : section_handle
  : (page_handle?.includes('customer') || page_handle?.includes('gift-card')) ? page_handle : null;


  try {

    const theme = await modelUsersThemes.findById(themeId).exec();
    if(!theme) return next();

    const settingsSchema = settings_handle ? (settings_handle !== 'global-styles') 
    ? theme.settings_schema.filter(item => item.name?.replace(' ', '-')?.toLowerCase() === settings_handle)
    : theme.settings_schema.filter(item => item.name?.replace(' ', '-')?.toLowerCase() === 'theme_info' || item.name?.replace(' ', '-')?.toLowerCase() === settings_handle)
    : null;

    const settingsFile = await fs.readFile(path.join(__dirname, `../users/user-${userId}/theme-${themeId}/config/settings_data.json`), 'utf-8');
    if(!settingsFile) return next();
    const settings = JSON.parse(settingsFile);

    if(settings_data?.current && Object.keys(settings_data?.current).length > 1){
      Object.entries(settings_data?.current).forEach(([key, val]) => {
        if(key && typeof val !== 'object'){
          settings.current[key] = val;
        }
      });
    }

    if(settings_data?.current?.sections && Object.keys(settings_data?.current?.sections).length > 0){
      Object.entries(settings_data?.current?.sections).forEach(([key, val]) => {
          settings.current.sections[key] = val; 
      });
    }

    const getPage = page_handle && theme?.pages?.filter(page => page.handle === page_handle);
    const sectionsFile = getPage?.length && await fs.readFile(path.join(__dirname, `../users/user-${userId}/theme-${themeId}/${getPage[0]?.template_name}.json`), 'utf-8');
    const parseSections = sectionsFile && JSON.parse(sectionsFile);
    
    if(Object.keys(templates).length > 0 && templates[page_handle] && templates[page_handle]?.sections && Object.keys(templates[page_handle]?.sections).length > 0){
      Object.entries(templates[page_handle]?.sections).forEach(([key, val]) => {
          parseSections.sections[key] = val; 
      });
    }


    const sectionSchema = section_handle 
    ? theme?.sections_schema?.filter(section => section.file_name === section_handle) 
    : (page_handle?.includes('customer') || page_handle?.includes('gift-card')) 
    ? theme?.sections_schema?.filter(section => section.file_name === page_handle)
    : null;
    const section = (section_handle && section_id) 
    ? parseSections?.sections[section_id] : section_handle 
    ? settings?.current?.sections[section_handle] 
    : (page_handle?.includes('customer') || page_handle?.includes('gift-card')) 
    ? parseSections?.current?.sections[page_handle] 
    : null;

    res.render('theme', {
      user: req?.session?.user || null,
      isAdmin: req?.session?.user?.isAdmin || null,
      userThemeView: true,
      settingsSchema: settingsSchema,
      settings: settings?.current || null, 
      sectionsSchema: theme?.sections_schema || null,
      sections: parseSections,
      sectionSchema: sectionSchema,
      section: section,
      make: make,
      id: theme._id,
      page_handle: page_handle || null,
      fonts: fonts,
      pages: theme?.pages || null,
      active: active,
      section_id: section_id || null,
      activeType: activeType
    });

  } catch (err) {
    return next(err);
  }

});

module.exports = router;
