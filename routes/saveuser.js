const express = require('express');
const router = express.Router();
const modelUsersThemes = require('../models/customer-themes');
const path = require('path');
const fs = require('fs');
const puppeteer = require('puppeteer');


/* POST SAVE FUNCTION */
router.post('/:userId/themes/:themeId', async (req, res, next) => {

    const { userId, themeId } = req.params;
    const { settings, section, blocks } = req.body;

    if (!userId || !themeId || !req.session.user || req?.session?.user?._id !== userId) return next();
    if (!settings?.length && !section?.length) return next();

    try {

        const theme = await modelUsersThemes.findById(themeId).exec();

        if (!theme) return next();
        if (section && !theme?.theme_sec) return res.sendStatus(500).send("error");

        // Theme Global Settings Save Function  
        if (settings?.length && theme.theme_set) {
            theme.theme_set.map(el => {
                if (el.settings) {
                    el.settings.map(oldItem => {
                        Object.entries(settings[0]).forEach(newItem => {
                            if (oldItem.id === newItem[0] && oldItem?.default && newItem[1] && newItem[1] !== "") {
                                oldItem.default = oldItem?.type === "range" ? parseInt(newItem[1]) : newItem[1];
                            }
                        })
                    })
                } else {
                    Object.entries(settings[0]).forEach(newItem => {
                        if (newItem[0] === "theme_name" && el.theme_name && newItem[1] && newItem[1] !== "") {
                            el.theme_name = newItem[1];
                        }
                    })
                }
            });
            modelUsersThemes.findByIdAndUpdate(themeId, { theme_set: theme.theme_set }, { new: true }).exec(err => {
                if (err) return res.status(500).send("error");
            });
        }

        let productTemplate = section?.length && section[0]?.template ? require(path.join(__dirname, `../users/user-${userId}/theme-${themeId}/templates/${section[0]?.template}.json`)) : null;
        if (section?.length && theme.theme_sec) {
            theme.theme_sec.map(el => {
                if (el.name === section[0]?.name) {
                    if (el.settings) {
                        el.settings.map(oldItem => {
                            Object.entries(section[0]?.settings).forEach(newItem => {
                                if (oldItem.id === newItem[0] && oldItem?.default && newItem[1] && newItem[1] !== "") {
                                    oldItem.default = oldItem?.type === "range" ? parseInt(newItem[1]) : newItem[1];
                                }
                            })
                        })
                    }
                    if (productTemplate?.sections) {
                        Object.entries(productTemplate?.sections).forEach(templateSection => {
                            let templateSectionName = templateSection[1]?.type ? templateSection[1]?.type.replace(/-/g, ' ') : null;
                            if (templateSectionName && templateSectionName === section[0]?.name) {
                                templateSection[1].settings = section[0].settings;
                            }
                            if (templateSection[1]?.blocks && blocks?.length) {
                                Object.entries(templateSection[1]?.blocks).forEach(block => {
                                    let templateBlockName = block[1]?.type ? block[1]?.type : null;
                                    blocks.forEach(newBlock => {
                                        if (templateBlockName && templateBlockName === newBlock.type && newBlock?.settings) {
                                            block[1].settings = newBlock.settings;
                                        }
                                    })
                                })
                            }
                        });
                        if (productTemplate) fs.writeFileSync(path.join(__dirname, `../users/user-${userId}/theme-${themeId}/templates/${section[0]?.template}.json`), JSON.stringify(productTemplate, null, 2), 'utf-8');
                    }
                    if (el?.blocks?.length && blocks?.length) {
                        el?.blocks.map(block => {
                            blocks.forEach(newBlock => {
                                if (block.type === newBlock.type && block?.settings && newBlock?.settings) {
                                    block.settings.map(oldSetting => {
                                        Object.entries(newBlock.settings).map(newSetting => {
                                            if (oldSetting.id === newSetting[0] && newSetting[1] && newSetting[1] !== "") {
                                                oldSetting.default = oldSetting?.type === "range" ? parseInt(newSetting[1]) : newSetting[1];
                                            }
                                        })
                                    })
                                }
                            })
                        })
                    }
                }
            });
            modelUsersThemes.findByIdAndUpdate(themeId, { theme_sec: theme.theme_sec }, { new: true }).exec((err) => {
                console.log(err);
                if(err) return res.status(500).send("error");
            });
        }
        
        const browser = await puppeteer.launch();
        const pageBrowser = await browser.newPage();
        await pageBrowser.goto(req.protocol + '://' + req.get('host') + '/view/users/' + userId + '/themes/' + themeId + '?page=Home%20Page&global=Global%20Styles&share=fkmksn@e34rra5454421s2dfsfwr2434524s');
        pageBrowser.setViewport({width: 1400, height: 700, deviceScaleFactor: 1});
        await pageBrowser.screenshot({ path: path.join(__dirname, '../public/screens/screenshot-' + themeId + '.png'), fullPage: true});
        await pageBrowser.goto(req.protocol + '://' + req.get('host') + '/view/users/' + userId + '/themes/' + themeId + '?page=Home%20Page&global=Global%20Styles&share=fkmksn@e34rra5454421s2dfsfwr2434524s');
        pageBrowser.setViewport({width: 375, height: 512, deviceScaleFactor: 3});
        await pageBrowser.screenshot({ path: path.join(__dirname, '../public/screens/mobile-screenshot-' + themeId + '.png')});
        await browser.close();

        res.status(200).send('success');

    } catch (err) {
        console.log(err);
        return res.status(500).send("error");
    }

});

module.exports = router;
