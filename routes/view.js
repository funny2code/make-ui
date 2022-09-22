const express = require('express');
const router = express.Router();
const storage = require('node-localstorage').LocalStorage;
const shop = require('../contents/shop');
const modelThemes = require('../models/themes');
const localStorage = new storage('./scratch');


/* GET theme settings and sections for Iframe View. */
router.get('/:id', async (req, res, next) => {

  const { id } = req.params;
  const { page, section, global } = req.query;
  const storageData = localStorage.getItem('theme');
  const localData = storageData ? JSON.parse(storageData) : null;

  if (!id || !page) return next();

  const makeMenu = require(`../contents/${id}/menu`);
  const makeFooterMenu = require(`../contents/${id}/footermenu`);
  const collection = require(`../contents/${id}/collection`);
  const collections = require(`../contents/${id}/collections`);
  const product = require(`../contents/${id}/product`);
  const cart = require(`../contents/${id}/cart`);
  const blog = require(`../contents/${id}/blogs`);
  const article = require(`../contents/${id}/article`);
  const customer = require(`../contents/${id}/customer`);
  const gift = require(`../contents/${id}/gift`);
  const themeGeneralTexts = require(`../themes/${id}/locales/en.default.json`);

  try {

    const theme = await modelThemes.findById(id).exec();

    if (!theme) return next();

    const settings = {};
    const sectionSettings = [];

    theme.theme_set && theme.theme_set.map(el => {
      if (el.settings) {
        for (var k in el.settings) {
          localData?.settings[el.settings[k].id] 
          ? settings[el.settings[k].id] = localData?.settings[el.settings[k].id]
          : settings[el.settings[k].id] = el.settings[k].default
        }
      }
    });

    if (section) {
      theme.theme_sec && theme.theme_sec.map(item => {
        if (item.file_name === section) {
            const findLocalSection = localData?.sections?.length && localData?.sections?.filter(localItem => localItem.file_name === section);
            const sectionChildSettings = {};
            const blocks = [];
            if(findLocalSection?.length){
              if(findLocalSection[0].file_name === section){
                if (findLocalSection[0].settings) {
                  Object.entries(findLocalSection[0].settings).forEach(([key, value]) => {
                    sectionChildSettings[key] = value;
                  });
                }
                if (findLocalSection[0].blocks?.length) {
                  findLocalSection[0].blocks.forEach((block, index) => {
                    blocks[index] = { type: block.type, settings: {} };
                    if (block && block?.settings) {
                      Object.entries(block.settings).forEach(([key, value]) => {
                        blocks[index].settings[key] = value;
                      })
                    }
                  })
                }
              }
            } else {
              if (item.settings) {
                for (var k in item.settings) {
                  sectionChildSettings[item.settings[k].id] = item.settings[k].default;
                }
              }
              if (item?.blocks?.length) {
                item.blocks.forEach((block, index) => {
                  blocks[index] = { type: block.type, settings: {} };
                  if (block && block?.settings) {
                    for (var i in block.settings) {
                      blocks[index].settings[block.settings[i].id] = block.settings[i].default;
                    }
                  }
                })
              }
            }
            sectionSettings.push({ file_name: item.file_name, name: item.name, settings: sectionChildSettings, blocks: blocks });
        }
      });
    } else if (global === 'Global Styles' || global === undefined) {
      theme.theme_pag.map(pageItem => {
        if (pageItem.name === page) {
          pageItem.items.forEach(item => {
            theme.theme_sec && theme.theme_sec.map(el => {
              if (item.handle === el.file_name) {
                const sectionChildSettings = {};
                const blocks = [];
                const findLocalSection = localData?.sections?.length && localData?.sections?.filter(localItem => localItem.name === el.name);
                if(findLocalSection?.length){
                  if(item.name === findLocalSection[0]?.name){
                    if (findLocalSection[0].settings) {
                      Object.entries(findLocalSection[0].settings).forEach(([key, value]) => {
                        sectionChildSettings[key] = value;
                      })
                    }
                    if (findLocalSection[0]?.blocks?.length) {
                      findLocalSection[0].blocks.forEach((block, index) => {
                        blocks[index] = { type: block.type, settings: {} };
                        if (block && block?.settings) {
                          Object.entries(block.settings).forEach(([key, value]) => {
                            blocks[index].settings[key] = value;
                          })
                        }
                      })
                    }
                  } 
                } else {
                  if (el.settings) {
                    for (var k in el.settings) {
                      sectionChildSettings[el.settings[k].id] = el.settings[k].default;
                    }
                  }
                  if (el?.blocks?.length) {
                    el.blocks.forEach((block, index) => {
                      blocks[index] = { type: block.type, settings: {} };
                      if (block && block?.settings) {
                        for (var i in block.settings) {
                          blocks[index].settings[block.settings[i].id] = block.settings[i].default;
                        }
                      }
                    })
                  }
                }
                sectionSettings.push({ file_name: el.file_name, name: item.name, settings: sectionChildSettings, blocks: blocks });
              }
            })
          })
        }
      })
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
      article: article,
      customer: customer,
      gift: gift,
      component: global,
      settings: settings,
      sections: sectionSettings,
      general: themeGeneralTexts?.general,
      date_formats: themeGeneralTexts?.date_formats,
      newsletter: themeGeneralTexts?.newsletter,
      accessibility: themeGeneralTexts?.accessibility,
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
  const {settings, sections} = req.body;
  const { page, global } = req.query;
  
  const sectionHandle = req.query.section;
  
  localStorage.setItem('theme', JSON.stringify(req.body));
  
  if (!id || !page) return next();
  if (!settings && !sections?.length) return next();

  const makeMenu = require(`../contents/${id}/menu`);
  const makeFooterMenu = require(`../contents/${id}/footermenu`);
  const collection = require(`../contents/${id}/collection`);
  const collections = require(`../contents/${id}/collections`);
  const product = require(`../contents/${id}/product`);
  const cart = require(`../contents/${id}/cart`);
  const blog = require(`../contents/${id}/blogs`);
  const article = require(`../contents/${id}/article`);
  const customer = require(`../contents/${id}/customer`);
  const gift = require(`../contents/${id}/gift`);
  const themeGeneralTexts = require(`../themes/${id}/locales/en.default.json`);

  try {

    const theme = await modelThemes.findById(id).exec();
    if (!theme) return next();

    const defaultSettings = {}; 
    const defaultSections = [];

    theme?.theme_set && theme.theme_set.map(el => {
      if (el.settings) {
        for (var k in el.settings) {
          settings ? Object.keys(settings).length && settings[el.settings[k].id]
            ? defaultSettings[el.settings[k].id] = settings[el.settings[k].id]
            : defaultSettings[el.settings[k].id] = el.settings[k].default
            : defaultSettings[el.settings[k].id] = el.settings[k].default;
        }
      }
    });

    if (sectionHandle) {
      theme.theme_sec && theme.theme_sec.map(el => {
        if (el.file_name === sectionHandle){
          let sectionChildSettings = {};
          let blocks = [];
          if (el.settings) {
            for (var k in el.settings) {
              sectionChildSettings[el.settings[k].id] = el.settings[k].default;
            }
          }
          if (el?.blocks?.length) {
            el.blocks.forEach((block, index) => {
              blocks[index] = { type: block.type, settings: {} };
              if (block && block?.settings) {
                for (var i in block.settings) {
                  blocks[index].settings[block.settings[i].id] = block.settings[i].default;
                }
              }
            })
          }
          defaultSections.push({ file_name: el.file_name, name: el.name, settings: sectionChildSettings, blocks: blocks });
        }
      });
    } else if (global === 'Global Styles' || global === undefined) {
      theme?.theme_pag.map(pageName => {
        if(pageName.name === page){
          pageName?.items.map(item => {
            theme?.theme_sec.map(el => {
              if (item.handle === el.file_name) {
                let sectionChildSettings = {};
                let blocks = [];
                if (el.settings) {
                  for (var k in el.settings) {
                    sectionChildSettings[el.settings[k].id] = el.settings[k].default;
                  }
                }
                if (el?.blocks?.length) {
                  el.blocks.forEach((block, index) => {
                    blocks[index] = { type: block.type, settings: {} };
                    if (block && block?.settings) {
                      for (var i in block.settings) {
                        blocks[index].settings[block.settings[i].id] = block.settings[i].default;
                      }
                    }
                  })
                }
                defaultSections.push({file_name: el.file_name, name: item.name, settings: sectionChildSettings, blocks: blocks });
              }
            });
          })
        }
      });
    }

    if (sections?.length) {
      defaultSections.forEach(item => {
        sections.forEach(section => {
          if(item.file_name === section.file_name) {
            item.settings = section.settings;
            item.blocks = section.blocks;
          }
        })
      });
    }

    res.render('view', {
      srcId: id,
      menu: makeMenu,
      footermenu: makeFooterMenu,
      shop: shop,
      collections: collections,
      collection: collection,
      product: product,
      cart: cart,
      blog: blog,
      article: article,
      customer: customer,
      gift: gift,
      component: global,
      settings: defaultSettings,
      sections: defaultSections,
      general: themeGeneralTexts?.general,
      date_formats: themeGeneralTexts?.date_formats,
      newsletter: themeGeneralTexts?.newsletter,
      accessibility: themeGeneralTexts?.accessibility,
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
