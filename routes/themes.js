const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;
const modelThemes = require('../models/themes');
const make = require('../contents/make');
const fonts = require('../contents/fonts');

/* GET Theme Settings and Sections. */
router.get('/:id', async (req, res, next) => {

  const {id} = req.params;
  const page_handle = req.query.page;
  const settings_handle = req.query.settings;
  const section_handle = req.query.section;
  const section_id = req.query.section_id;

  if(!id || !page_handle) return next();

  const activeType = settings_handle || section_handle ? settings_handle ? 'settings' : 'section' : null;
  const active = settings_handle ? settings_handle : section_handle;

  try{
    const theme = await modelThemes.findById(id).exec();
    if(!theme) return next();

    const settingsSchema = settings_handle ? (settings_handle !== 'global-styles') 
    ? theme.settings_schema.filter(item => item.name?.replace(' ', '-')?.toLowerCase() === settings_handle)
    : theme.settings_schema.filter(item => item.name?.replace(' ', '-')?.toLowerCase() === 'theme_info' || item.name?.replace(' ', '-')?.toLowerCase() === settings_handle)
    : null;
    
    const settingsFile = await fs.readFile(path.join(__dirname, `../themes/${id}/config/settings_data.json`), 'utf-8');
    if(!settingsFile) return next();
    const settings = JSON.parse(settingsFile);
    const getPage = theme?.pages?.filter(page => page.handle === page_handle);
    if(!getPage?.length) return next();
    const sectionsFile = await fs.readFile(path.join(__dirname, `../themes/${id}/${getPage[0]?.template_name}.json`), 'utf-8');
    if(!sectionsFile) return next();
    const parseSections = JSON.parse(sectionsFile);
    const sectionSchema = section_handle ? theme?.sections_schema?.filter(section => section.file_name === section_handle) : null;
    const section = (section_handle && section_id) 
    ? parseSections?.sections[section_id] : section_handle 
    ? settings?.current?.sections[section_handle] : null;

    res.render('theme', {
      user: req?.session?.user || null,
      isAdmin: req?.session?.user?.isAdmin || null,
      userThemeView: false,
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

  } catch (err){
    return next(err);
  }

});

/* POST Theme Settings and Sections. */
router.post('/:id', async (req, res, next) => {

  const {id} = req.params;
  const {settings_data, templates} = req.body;
  const page_handle = req.query.page;
  const settings_handle = req.query.settings;
  const section_handle = req.query.section;
  const section_id = req.query.section_id;

  if(!id || !page_handle) return next();

  const activeType = settings_handle || section_handle ? settings_handle ? 'settings' : 'section' : null;
  const active = settings_handle ? settings_handle : section_handle;

  try{
    const theme = await modelThemes.findById(id).exec();
    if(!theme) return next();

    const settingsSchema = settings_handle ? (settings_handle !== 'global-styles') 
    ? theme.settings_schema.filter(item => item.name?.replace(' ', '-')?.toLowerCase() === settings_handle)
    : theme.settings_schema.filter(item => item.name?.replace(' ', '-')?.toLowerCase() === 'theme_info' || item.name?.replace(' ', '-')?.toLowerCase() === settings_handle)
    : null;

    const settingsFile = await fs.readFile(path.join(__dirname, `../themes/${id}/config/settings_data.json`), 'utf-8');
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

    const getPage = theme?.pages?.filter(page => page.handle === page_handle);
    if(!getPage?.length) return next();
    const sectionsFile = await fs.readFile(path.join(__dirname, `../themes/${id}/${getPage[0]?.template_name}.json`), 'utf-8');
    if(!sectionsFile) return next();
    const parseSections = JSON.parse(sectionsFile);
    
    if(Object.keys(templates).length > 0 && templates[page_handle] && templates[page_handle].sections && Object.keys(templates[page_handle].sections).length > 0){
      Object.entries(templates[page_handle].sections).forEach(([key, val]) => {
          parseSections.sections[key] = val; 
      });
    }


    const sectionSchema = section_handle ? theme?.sections_schema?.filter(section => section.file_name === section_handle) : null;
    const section = (section_handle && section_id) 
    ? parseSections?.sections[section_id] : section_handle 
    ? settings?.current?.sections[section_handle] : null;

    res.render('theme', {
      user: req?.session?.user || null,
      isAdmin: req?.session?.user?.isAdmin || null,
      userThemeView: false,
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

  } catch (err){
    return next(err);
  }

});

module.exports = router;
