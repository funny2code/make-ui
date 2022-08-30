const express = require('express');
const router = express.Router();
const modelThemes = require('../models/themes');
const path = require('path');
const fs = require('fs');
const Pageres = require('pageres');



/* POST SAVE FUNCTION */
router.post('/:id', async (req, res, next) => {

    if (!req.session.user && !req?.session?.user?.isAdmin) return next();

    const { id } = req.params;
    const { settings, sections } = req.body;

    if (!id) return next();
    if (!settings && !sections?.length) return next();

    try {

        const theme = await modelThemes.findById(id).exec();

        if (!theme) return next();
        if (!theme?.theme_sec) return res.sendStatus(500).send({status: 500, message: "error"});

        // Theme Global Settings Save Function  
        if (settings && theme.theme_set) {
            theme.theme_set.map(el => {
                if (el.settings) {
                    el.settings.map(oldItem => {
                        Object.entries(settings).forEach(newItem => {
                            if (oldItem.id === newItem[0] && newItem[1] !== "") {
                                oldItem.default = oldItem?.type === "range" ? parseInt(newItem[1]) : newItem[1];
                            }
                        })
                    })
                } else {
                    Object.entries(settings).forEach(newItem => {
                        if (newItem[0] === "theme_name" && newItem[1] !== "") {
                            el.theme_name = newItem[1];
                        }
                    })
                }
            });
            modelThemes.findByIdAndUpdate(id, { theme_set: theme.theme_set }, { new: true }).exec(err => {
                if (err) return res.status(500).send({status: 500, message: "error"});
            });
        }

        // Theme Section Settings Save Function
        if (sections?.length && theme.theme_sec) {
            theme.theme_sec.map(el => {
                let findSection = sections.filter(item => item.file_name === el.file_name);
                let productTemplate = findSection[0]?.template_name ? require(path.join(__dirname, `../themes/${id}/${sections[0]?.template_name}.json`)) : null;
                if (findSection?.length) {
                    if (el.settings && findSection[0]?.settings) {
                        el.settings.map(oldItem => {
                            Object.entries(findSection[0]?.settings).forEach(newItem => {
                                if (oldItem.id === newItem[0] && newItem[1] !== undefined) {
                                    oldItem.default = oldItem?.type === "range" ? parseInt(newItem[1]) : newItem[1];
                                }
                            })
                        })
                    }
                    if (productTemplate?.sections) {
                        Object.entries(productTemplate?.sections).forEach(templateSection => {
                            let templateSectionName = templateSection[1]?.type ? templateSection[1]?.type.replace(/-/g, ' ') : null;
                            if (templateSectionName && templateSectionName === findSection[0]?.name) {
                                templateSection[1].settings = findSection[0].settings;
                            }
                            if (templateSection[1]?.blocks && findSection[0]?.blocks?.length) {
                                Object.entries(templateSection[1]?.blocks).forEach(block => {
                                    let templateBlockName = block[1]?.type ? block[1]?.type : null;
                                    findSection[0]?.blocks.forEach(newBlock => {
                                        if (templateBlockName && templateBlockName === newBlock.type && newBlock?.settings) {
                                            block[1].settings = newBlock.settings;
                                        }
                                    })
                                })
                            }
                        });
                        if (productTemplate) fs.writeFileSync(path.join(__dirname, `../themes/${id}/${findSection[0]?.template_name}.json`), JSON.stringify(productTemplate, null, 2), 'utf-8');
                    }
                    if (el?.blocks?.length && findSection[0]?.blocks?.length) {
                        el?.blocks.map(block => {
                            findSection[0]?.blocks.forEach(newBlock => {
                                if (block.type === newBlock.type && block?.settings && newBlock?.settings) {
                                    block.settings.map(oldSetting => {
                                        Object.entries(newBlock.settings).map(newSetting => {
                                            if (oldSetting.id === newSetting[0] && newSetting[1] !== undefined) {
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
            modelThemes.findByIdAndUpdate(id, { theme_sec: theme.theme_sec }, { new: true }).exec((err) => {
                if(err) return res.sendStatus(500).send({status: 500, message: "error"});
            });
        }

        await new Pageres({
                delay: 2,
                launchOptions: {args: ['--no-sandbox', '--disable-setuid-sandbox']}
            })
            .src(req.protocol + '://' + req.get('host') + '/view/' + id + '?page=Home%20Page', ['1440x900'], {crop: true, filename: 'screen-' + id})
            .src(req.protocol + '://' + req.get('host') + '/view/' + id + '?page=Home%20Page', ['414x736'], {crop: true, filename: 'm-screen-' + id})
            .dest(path.join(__dirname, '../public/screens/'))
            .run();

        res.status(200).send({status: 200, message: 'success'});

    } catch (err) {
        console.log(err);
        return res.sendStatus(500).send({status: 500, message: "error"});
    }

});

module.exports = router;
