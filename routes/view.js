const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs').promises;
const shop = require('../contents/shop');
const modelThemes = require('../models/themes');


/* GET theme settings and sections for Iframe View. */
router.get('/:id', async (req, res, next) => {

  const { id } = req.params;
  const page_handle = req.query.page;
  const section_handle = req.query.section;
  const section_id = req.query.section_id;
  const settings_handle = req.query.settings;

  if (!id) return next();

  try {

    
    const theme = await modelThemes.findById(id).exec();
    if (!theme) return next();
    
    const makeMenu = require(`../contents/menu`);
    const makeFooterMenu = require(`../contents/footermenu`);
    const page = require(`../contents/page`);
    const collection = require(`../contents/collection`);
    const collections = require(`../contents/collections`);
    const product = require(`../contents/product`);
    const cart = require(`../contents/cart`);
    const blog = require(`../contents/blogs`);
    const article = require(`../contents/article`);
    const customer = require(`../contents/customer`);
    const gift = require(`../contents/gift`);
    const themeGeneralTexts = require(`../themes/${id}/locales/en.default.json`);

    let sections = null;
    
    const settingsFile = await fs.readFile(path.join(__dirname, `../themes/${id}/config/settings_data.json`), 'utf-8');
    if(!settingsFile) return next();
    const settings = JSON.parse(settingsFile);

    const getPage = page_handle && theme?.pages?.filter(page => page.handle === page_handle);

    if(section_handle && !section_id){
      sections = (section_handle && section_handle !== 'header' && section_handle !== 'footer' && section_handle !== 'announcement-bar') 
      ? settings?.current?.sections[section_handle]
      : null;
    } else if(!section_handle && (page_handle?.includes('customer') || page_handle?.includes('gift-card'))){
      sections = settings?.current?.sections[page_handle];
    } else {
      const sectionsFile = getPage?.length && await fs.readFile(path.join(__dirname, `../themes/${id}/${getPage[0]?.template_name}.json`), 'utf-8');
      const parseSections = sectionsFile && JSON.parse(sectionsFile);
      sections = (section_id) 
      ? parseSections?.sections[section_id] 
      : parseSections;
    }

    res.render('view', {
      srcId: id,
      menu: makeMenu,
      footermenu: makeFooterMenu,
      shop: shop,
      collection: collection,
      collections: collections,
      product: product,
      cart: cart,
      blog: blog,
      page: page,
      article: article,
      customer: customer,
      gift: gift,
      component: settings_handle || null,
      settingsSchema: theme?.settings_schema || null,
      settings: settings?.current,
      sectionSchema: theme?.section_schema || null,
      sections: sections,
      sectionid: section_id || null,
      general: themeGeneralTexts?.general,
      date_formats: themeGeneralTexts?.date_formats,
      newsletter: themeGeneralTexts?.newsletter,
      accessibility: themeGeneralTexts?.accessibility,
      blogs: themeGeneralTexts?.blogs,
      onboarding: themeGeneralTexts?.onboarding,
      products: themeGeneralTexts?.products,
      templates: themeGeneralTexts?.templates,
      sectionst: themeGeneralTexts?.sections,
      localization: themeGeneralTexts?.localization,
      customert: themeGeneralTexts?.customer,
      gift_cards: themeGeneralTexts?.gift_cards
    });

  } catch (err) {
    next(err);
  }

});


/* POST theme settings and sections for Iframe View. */
router.post('/:id', async (req, res, next) => {

  const { id } = req.params;
  const {settings_data, templates} = req.body;
  const page_handle = req.query.page;
  const section_handle = req.query.section;
  const section_id = req.query.section_id;
  const settings_handle = req.query.settings;
  
  if (!id) return next();

  try {

    
    const theme = await modelThemes.findById(id).exec();
    if (!theme) return next();
    
    const makeMenu = require(`../contents/menu`);
    const page = require(`../contents/page`);
    const makeFooterMenu = require(`../contents/footermenu`);
    const collection = require(`../contents/collection`);
    const collections = require(`../contents/collections`);
    const product = require(`../contents/product`);
    const cart = require(`../contents/cart`);
    const blog = require(`../contents/blogs`);
    const article = require(`../contents/article`);
    const customer = require(`../contents/customer`);
    const gift = require(`../contents/gift`);
    const themeGeneralTexts = require(`../themes/${id}/locales/en.default.json`);

    let sections = null;

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

    const getPage = page_handle && theme?.pages?.filter(page => page.handle === page_handle);

    if(section_handle && !section_id){
      sections = (section_handle && section_handle !== 'header' && section_handle !== 'footer' && section_handle !== 'announcement-bar') 
      ? settings?.current?.sections[section_handle]
      : null;
    } else if(!section_handle && (page_handle?.includes('customer') || page_handle?.includes('gift-card'))){
      sections = settings?.current?.sections[page_handle];
    } else {
      const sectionsFile = getPage?.length && await fs.readFile(path.join(__dirname, `../themes/${id}/${getPage[0]?.template_name}.json`), 'utf-8');
      const parseSections = sectionsFile && JSON.parse(sectionsFile);
      if(Object.keys(templates).length > 0 && templates[page_handle] && templates[page_handle]?.sections && Object.keys(templates[page_handle]?.sections).length > 0){
        Object.entries(templates[page_handle]?.sections).forEach(([key, val]) => {
            parseSections.sections[key] = val; 
        });
      }
      sections = (section_id) 
      ? parseSections?.sections[section_id] 
      : parseSections;
    }

    res.render('view', {
      srcId: id,
      menu: makeMenu,
      footermenu: makeFooterMenu,
      shop: shop,
      collection: collection,
      collections: collections,
      product: product,
      cart: cart,
      blog: blog,
      page: page,
      article: article,
      customer: customer,
      gift: gift,
      component: settings_handle || null,
      settingsSchema: theme?.settings_schema || null,
      settings: settings?.current,
      sectionSchema: theme?.section_schema || null,
      sections: sections,
      sectionid: section_id || null,
      general: themeGeneralTexts?.general,
      date_formats: themeGeneralTexts?.date_formats,
      newsletter: themeGeneralTexts?.newsletter,
      accessibility: themeGeneralTexts?.accessibility,
      blogs: themeGeneralTexts?.blogs,
      onboarding: themeGeneralTexts?.onboarding,
      products: themeGeneralTexts?.products,
      templates: themeGeneralTexts?.templates,
      sectionst: themeGeneralTexts?.sections,
      localization: themeGeneralTexts?.localization,
      customert: themeGeneralTexts?.customer,
      gift_cards: themeGeneralTexts?.gift_cards
    });

  } catch (err) {
    next(err);
  }

});

module.exports = router;
