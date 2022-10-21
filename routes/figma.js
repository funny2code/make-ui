const express = require('express');
const router = express.Router();
const modelFigma = require('../models/figma');

router.get('/:userId/:themeId', async (req, res, next) => {

  const { userId, themeId} = req.params;
  const {pagename} = req.query;
  if (!userId || !themeId || !pagename) return next();

  try {

    const pages = await modelFigma.findOne({user_id: userId, theme_id: themeId, page_name: pagename}).exec();
    if (!pages) return res.status(404).json({status:'404', message: "404 Not Found!"});
    res.status(200).json(pages?.data);

  } catch (err) {
    return next(err);
  }

});

router.post('/:userId/:themeId/:pageName', async (req, res, next) => {

    const { userId, themeId, pageName} = req.params;
    const data = req.body;
    if (!userId || !themeId || !data?.length || !pageName) return next();
  
    try {
  
        const findFigma = await modelFigma.findOne({user_id: userId, theme_id: themeId, page_name: pageName}).exec();
        if(findFigma){
            modelFigma.findByIdAndUpdate(findFigma._id, { data: data }, { new: true }).exec(err => {
                if (err) return res.status(500).send("error");
                return res.status(200).send("updated Succsess!");
            });
        } else {   
            const newFigma = await new modelFigma({
                user_id: userId, 
                theme_id: themeId, 
                page_name: pageName,
                data: JSON.stringify(data)
            });
        
            newFigma.save((err, data) => {
                if(err) return next();
                return res.status(200).send("added Succsess!");
            });
        }
  
    } catch (err) {
      return next(err);
    }
  
});

module.exports = router;
