const express = require('express');
const router = express.Router();
const themesModel = require('../models/themes');
const sectionsModel = require('../models/sections');
const path = require('path');
const fs = require('fs');
const archiver = require('archiver');



/* POST DOWNLOAD FUNCTION */
router.post('/', async (req, res, next) => {
    const {id} = req.body;
    if(!id) return next();

    try{
        theme = await themesModel.findById(id).exec();
        if(!theme) return res.sendStatus(500).send("error");
        themeSections = await sectionsModel.findOne({theme_id: theme._id}).exec();
        if(!themeSections) return res.sendStatus(500).send("error");
        if(theme?.settings){
        fs.writeFileSync(path.join(__dirname, '../basetheme/config/settings_schema.json'), JSON.stringify(theme?.settings, null, 2), 'utf-8');
        }
        if(themeSections?.sections){
            themeSections?.sections.map((section) => {
                if(!section || !section?.name || section.name === 'accordion with product' || section.name === 'blog post' || section.name === 'blog posts' || section.name === '404') return;
                let file = fs.readFileSync(path.join(__dirname, `../basetheme/sections/${section?.name?.replace(/\s/g, '-')}.liquid`), 'utf-8');
                if(file){
                    let splitFile = file.replace('{% endschema %}', '').split('{% schema %}');
                    let newSectionSchema = splitFile?.length ? splitFile[0] + '{% schema %}\n' + JSON.stringify(section, null, 2) + '\n{% endschema %}' : null;
                    if(!newSectionSchema) return;
                    fs.writeFileSync(path.join(__dirname, `../basetheme/sections/${section?.name?.replace(/\s/g, '-')}.liquid`), newSectionSchema, 'utf-8');
                }
            })
        }

    } catch (err){
        return next(err);
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
    archive.directory(path.join(__dirname, '../basetheme'), false);
    archive.finalize();

});

module.exports = router;
