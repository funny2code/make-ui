const express = require('express');
const router = express.Router();
const modelFigma = require('../models/figma');

router.get('/:userId/:themeId', async (req, res, next) => {

  const { userId, themeId } = req.params;
  const {select} = req.query;
  if (!userId || !themeId || !select) return next();

  try {

    const pages = await modelFigma.findOne({user_id: userId, theme_id: themeId}).exec();
    if (!pages) return next();
    if(select !== "all"){
      const slectedData = select?.split(',');
      const newData = [];
      slectedData?.forEach(selectItem => {
        pages?.data?.forEach(item => {
          let itemName = item?.name?.toLowerCase();
          if(itemName.includes(selectItem)) newData.push(item);
        })
      });
      res.status(200).json(newData);
    } else {
      res.status(200).json(pages?.data);
    }

  } catch (err) {
    return next(err);
  }

});

router.post('/:userId/:themeId', async (req, res, next) => {

    const { userId, themeId } = req.params;
    const data = req.body;
    if (!userId || !themeId || !data) return next();
  
    try {
  
        const findFigma = await modelFigma.findOne({user_id: userId, theme_id: themeId}).exec();
        if(findFigma){
            modelFigma.findByIdAndUpdate(findFigma._id, { data: data }, { new: true }).exec(err => {
                if (err) return res.status(500).send("error");
                return res.status(200).send("updated Succsess!");
            });
        } else {   
            const newFigma = await new modelFigma({
                user_id: userId, 
                theme_id: themeId, 
                data: data
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
