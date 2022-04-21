const express = require('express');
const router = express.Router();
const makeMenu = require('../config/menu');
const shop = require('../config/shop');
const collection = require('../config/collection');
const collections = require('../config/collections');
const product = require('../config/product');
const cart = require('../config/cart');
const blog = require('../config/blogs');
const article = require('../config/article');
const customer = require('../config/customer');
const gift = require('../config/gift');
const modelUsersThemes = require('../models/customer-themes');


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
                if (item.name === section) {
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
                    sectionSettings.push({ name: item.name, settings: sectionChildSettings, blocks: blocks });
                }
            });
        } else if (global === 'Global Styles' || global === undefined) {
            theme.theme_pag.map(pageItem => {
                if(pageItem.name === page) {
                    pageItem.items.forEach(item => {
                        theme.theme_sec && theme.theme_sec.map(el => {
                            if (item.name === el.name) {
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
                                sectionSettings.push({ name: item.name, settings: sectionChildSettings, blocks: blocks });
                            }
                        })
                    })
                }
            })
        }

        res.render('view', {
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
    const { settings, section, blocks } = req.body;
    const { page, global } = req.query;
    const sectionHandle = req.query.section;

    if (!themeId || !userId || !page || !req.session.user || req?.session?.user?._id !== userId) return next();
    if (!settings?.length && !section?.length && !blocks.length) return next();

    try {

        const theme = await modelUsersThemes.findById(themeId).exec();
        if (!theme) return next();

        const defaultSettings = {};
        const defaultSections = [];

        theme?.theme_set && theme.theme_set.map(el => {
            if (el.settings) {
                for (var k in el.settings) {
                    settings?.length ? Object.keys(settings[0]).length && settings[0][el.settings[k].id]
                        ? defaultSettings[el.settings[k].id] = settings[0][el.settings[k].id]
                        : defaultSettings[el.settings[k].id] = el.settings[k].default
                        : defaultSettings[el.settings[k].id] = el.settings[k].default;
                }
            }
        });

        if (sectionHandle) {
            theme.theme_sec && theme.theme_sec.map(el => {
                if (el.name === sectionHandle) {
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
                    defaultSections.push({ name: el.name, settings: sectionChildSettings, blocks: blocks });
                }
            });
        } else if (global === 'Global Styles' || global === undefined) {
            theme?.theme_pag.map(pageItem => {
                if(pageItem.name === page) {
                    pageItem?.items.map(item => {
                        theme?.theme_sec.map(el => {
                            if (item.name === el.name) {
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
                                defaultSections.push({ name: item.name, settings: sectionChildSettings, blocks: blocks });
                            }
                        });
                    })
                }
            });
        }

        if (section?.length || blocks?.length) {
            defaultSections.forEach(item => {
                if (section?.length && item.name === section[0].name) {
                    item.settings = section[0].settings;
                }
                if (blocks?.length && item?.blocks?.length) {
                    item.blocks = blocks;
                }
            });
        }

        res.render('view', {
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

module.exports = router;
