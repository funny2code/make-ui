const express = require('express');
const router = express.Router();
const modelUsersThemes = require('../models/customer-themes');
const shop = require('../contents/shop');


/* GET theme settings and sections for Iframe View. */
router.get('/:userId/themes/:themeId', async (req, res, next) => {

    const { userId, themeId } = req.params;
    const { page, section, global, share} = req.query;
    
    if(share !== 'fkmksn@e34rra5454421s2dfsfwr2434524s'){
        if(!themeId || !userId || !page || !req.session.user || req?.session?.user?._id !== userId) return next();
    }

    try {

        const theme = await modelUsersThemes.findById(themeId).exec();
        if (!theme) return next();

        const makeMenu = require(`../contents/${theme.extend_id}/menu`);
        const collection = require(`../contents/${theme.extend_id}/collection`);
        const collections = require(`../contents/${theme.extend_id}/collections`);
        const product = require(`../contents/${theme.extend_id}/product`);
        const cart = require(`../contents/${theme.extend_id}/cart`);
        const blog = require(`../contents/${theme.extend_id}/blogs`);
        const article = require(`../contents/${theme.extend_id}/article`);
        const customer = require(`../contents/${theme.extend_id}/customer`);
        const gift = require(`../contents/${theme.extend_id}/gift`);

        const settings = {};
        const sectionSettings = [];

        theme.theme_set && theme.theme_set.map(el => {
            if (el.settings) {
                for (var k in el.settings) {
                    settings[el.settings[k].id] = el.settings[k].default;
                }
            }
        });

        if (section) {
            theme.theme_sec && theme.theme_sec.map(item => {
                if (item.file_name === section) {
                    const sectionChildSettings = {};
                    const blocks = [];
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
                    sectionSettings.push({file_name: item.file_name, name: item.name, settings: sectionChildSettings, blocks: blocks });
                }
            });
        } else if (global === 'Global Styles' || global === undefined) {
            theme.theme_pag.map(pageItem => {
                if(pageItem.name === page) {
                    pageItem.items.forEach(item => {
                        theme.theme_sec && theme.theme_sec.map(el => {
                            if (item.handle === el.file_name) {
                                const sectionChildSettings = {};
                                const blocks = [];
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
                                sectionSettings.push({file_name: el.file_name, name: item.name, settings: sectionChildSettings, blocks: blocks });
                            }
                        })
                    })
                }
            })
        }

        console.log(sectionSettings);

        res.render('view', {
            srcId: theme.extend_id,
            menu: makeMenu,
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
            sections: sectionSettings
        });

    } catch (err) {
        next(err);
    }

});


/* POST theme settings and sections for Iframe View. */
router.post('/:userId/themes/:themeId', async (req, res, next) => {

    const { userId, themeId } = req.params;
    const { settings, sections } = req.body;
    const { page, global } = req.query;
    const sectionHandle = req.query.section;

    if (!themeId || !userId || !page || !req.session.user || req?.session?.user?._id !== userId) return next();
    if (!settings && !sections?.length) return next();

    try {

        const theme = await modelUsersThemes.findById(themeId).exec();
        if (!theme) return next();

        const makeMenu = require(`../contents/${theme.extend_id}/menu`);
        const collection = require(`../contents/${theme.extend_id}/collection`);
        const collections = require(`../contents/${theme.extend_id}/collections`);
        const product = require(`../contents/${theme.extend_id}/product`);
        const cart = require(`../contents/${theme.extend_id}/cart`);
        const blog = require(`../contents/${theme.extend_id}/blogs`);
        const article = require(`../contents/${theme.extend_id}/article`);
        const customer = require(`../contents/${theme.extend_id}/customer`);
        const gift = require(`../contents/${theme.extend_id}/gift`);

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
                if (el.file_name === sectionHandle) {
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
                    defaultSections.push({file_name: el.file_name, name: el.name, settings: sectionChildSettings, blocks: blocks });
                }
            });
        } else if (global === 'Global Styles' || global === undefined) {
            theme?.theme_pag.map(pageItem => {
                if (pageItem.name === page) {
                    pageItem?.items.map(item => {
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
            srcId: theme.extend_id,
            menu: makeMenu,
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
            settings: defaultSettings,
            sections: defaultSections
        });

    } catch (err) {
        console.log(err);
        next(err);
    }

});

module.exports = router;
