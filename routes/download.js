const express = require('express');
const router = express.Router();
const modelUsersThemes = require('../models/customer-themes');
const path = require('path');
const fs = require('fs').promises;
const archiver = require('archiver');



/* POST DOWNLOAD FUNCTION */
router.post('/', async (req, res, next) => {
    
    const {userId, themeId} = req.body;

    if(!userId || !themeId || !req.session.user || req?.session?.user?._id !== userId) return next();

    try {
        
        const theme = await modelUsersThemes.findById(themeId).exec();
        if(!theme) return res.sendStatus(500).send("error");
        // if(theme?.theme_set){
        //     fs.writeFileSync(path.join(__dirname, `../users/user-${userId}/theme-${themeId}/config/settings_schema.json`), JSON.stringify(theme.theme_set, null, 2), 'utf-8');
        // }

        // if(theme?.theme_sec){
        //     theme.theme_sec.map((section) => {
        //         if(!section || !section?.name || section.name === 'accordion with product' || section.name === 'blog post' || section.name === 'blog posts' || section.name === '404' || section.name === 'product a' || section.name === 'product password banner') return;
        //         let file = fs.readFileSync(path.join(__dirname, `../users/user-${userId}/theme-${themeId}/sections/${section?.name?.replace(/\s/g, '-')}.liquid`), 'utf-8');
        //         if(file){
        //             let splitFile = file.replace('{% endschema %}', '').split('{% schema %}');
        //             let newSectionSchema = splitFile?.length ? splitFile[0] + '{% schema %}\n' + JSON.stringify(section, null, 2) + '\n{% endschema %}' : null;
        //             if(!newSectionSchema) return;
        //             fs.writeFileSync(path.join(__dirname, `../users/user-${userId}/theme-${themeId}/sections/${section?.name?.replace(/\s/g, '-')}.liquid`), newSectionSchema, 'utf-8');
        //         }
        //     })
        // }

        const output = await fs.createWriteStream('basetheme.zip');
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
