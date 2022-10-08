const express = require('express');
const router = express.Router();
const modelUsersThemes = require('../models/customer-themes');
const path = require('path');
const fs = require('fs');
const fsp = require('fs').promises;
const archiver = require('archiver');



/* POST DOWNLOAD FUNCTION */
router.post('/', async (req, res, next) => {
    
    const {userId, themeId} = req.body;

    if(!userId || !themeId || !req.session.user || req?.session?.user?._id !== userId) return next();

    try {
        
        const theme = await modelUsersThemes.findById(themeId).exec();
        if(!theme) return res.sendStatus(500).send("error");
    
        let sectionDirectory = await fsp.readdir(path.join(__dirname, `../users/user-${userId}/theme-${themeId}/templates`));
        for(let file of sectionDirectory){
            if(file?.includes('.json')){
                let fileContent = await fsp.readFile(path.join(__dirname, `../users/user-${userId}/theme-${themeId}/templates/${file}`), 'utf-8');
                let fileContentParse = JSON.parse(fileContent);
                if(fileContentParse?.sections && Object.keys(fileContentParse?.sections).length){
                    Object.entries(fileContentParse?.sections).forEach(([key, val]) => {
                        if(fileContentParse?.sections[key]?.settings && Object.keys(fileContentParse?.sections[key]?.settings).length){
                            Object.entries(fileContentParse?.sections[key]?.settings).forEach(([skey, sval]) => {
                                if(fileContentParse?.sections[key]?.settings[skey] && typeof fileContentParse?.sections[key]?.settings[skey] === "string"){
                                    if(fileContentParse?.sections[key]?.settings[skey]?.includes(`/${theme?.extend_id}/`)) fileContentParse.sections[key].settings[skey] = "";
                                }
                            });
                        }
                        if(fileContentParse?.sections[key]?.blocks && Object.keys(fileContentParse?.sections[key]?.blocks).length){
                            Object.entries(fileContentParse?.sections[key]?.blocks).forEach(([skey, sval]) => {
                                if(fileContentParse?.sections[key]?.blocks[skey]?.settings && Object.keys(fileContentParse?.sections[key]?.blocks[skey]?.settings).length){
                                    Object.entries(fileContentParse?.sections[key]?.blocks[skey]?.settings).forEach(([bkey, bval]) => {
                                        if(fileContentParse?.sections[key]?.blocks[skey]?.settings[bkey] && typeof fileContentParse?.sections[key]?.blocks[skey]?.settings[bkey] === "string"){
                                            if(fileContentParse?.sections[key]?.blocks[skey]?.settings[bkey]?.includes(`/${theme?.extend_id}/`)) fileContentParse.sections[key].blocks[skey].settings[bkey] = "";
                                        }
                                    });
                                }
                            });
                        } 
                    });
                }
                await fsp.writeFile(path.join(__dirname, `../users/user-${userId}/theme-${themeId}/templates/${file}`), JSON.stringify(fileContentParse, null, 2), 'utf-8');
            }
        }

        const output = fs.createWriteStream('basetheme.zip');
        const archive = archiver('zip');

        output.on('close', async function () {
            res.setHeader('Content-type','application/zip');
            res.sendFile(path.join(__dirname, '../basetheme.zip'));
        });

        archive.on('error', function(err){
            throw err;
        });

        archive.pipe(output);
        archive.directory(path.join(__dirname, `../users/user-${userId}/theme-${themeId}`), false);
        archive.finalize();

    } catch (err){
        console.log(err, "----ERROR");
        return next(err);
    }

});

module.exports = router;
