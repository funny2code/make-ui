const express = require('express');
const router = express.Router();
const modelThemes = require('../models/themes');
const path = require('path');
const fs = require('fs').promises;
const Pageres = require('pageres');



/* POST SAVE FUNCTION */
router.post('/:id', async (req, res, next) => {

    if (!req.session.user && !req?.session?.user?.isAdmin) return next();

    const { id } = req.params;
    const {settings_data, templates} = req.body;

    if (!id) return next();
    if (!settings_data?.current && Object.keys(settings_data?.current).length === 1 && !Object.keys(settings_data?.current?.sections).length && !Object.keys(templates).length) return next();

    try {

        const theme = await modelThemes.findById(id).exec();
        if (!theme) return next();

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

        if(settings_data?.current && Object.keys(settings_data?.current).length > 1 || settings_data?.current?.sections && Object.keys(settings_data?.current?.sections).length > 0){
            let saveSettingsSchema = await fs.writeFile(path.join(__dirname, `../themes/${id}/config/settings_data.json`), JSON.stringify(settings, null, 2), 'utf-8');
            console.log(saveSettingsSchema, "Save Settings Schema");
        }
        
        if(Object.keys(templates).length > 0){
            Object.entries(templates).forEach(async ([key, val]) => {
                const sectionsFile = await fs.readFile(path.join(__dirname, `../themes/${id}/templates/${key}.json`), 'utf-8');
                if(!sectionsFile) return;
                const parseSections = JSON.parse(sectionsFile);
                if(templates[key]?.order?.length){
                    templates[key]?.order?.forEach(orderItem => {
                        if(parseSections.sections[orderItem]){ 
                            parseSections.sections[orderItem] = templates[key].sections[orderItem];
                        } else {
                            parseSections.order.push(orderItem);
                            parseSections.sections[orderItem] = templates[key].sections[orderItem];
                        } 
                    });
                }
                const saveSectionsSchema = await fs.writeFile(path.join(__dirname, `../themes/${id}/templates/${key}.json`), JSON.stringify(parseSections, null, 2), 'utf-8'); 
                console.log(saveSectionsSchema, "Save Sections Schema");
            })
        }

        await new Pageres({
                delay: 2,
                launchOptions: {args: ['--no-sandbox', '--disable-setuid-sandbox']}
            })
            .src(req.protocol + '://' + req.get('host') + '/view/' + id + '?page=index', ['1440x900'], {crop: true, filename: 'screen-' + id})
            .src(req.protocol + '://' + req.get('host') + '/view/' + id + '?page=index', ['414x736'], {crop: true, filename: 'm-screen-' + id})
            .dest(path.join(__dirname, '../public/screens/'))
            .run();

        res.status(200).send({status: 200, message: 'success'});

    } catch (err) {
        return res.sendStatus(500).send({status: 500, message: "error"});
    }

});

module.exports = router;
