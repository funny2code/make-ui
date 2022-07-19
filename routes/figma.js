const express = require('express');
const router = express.Router();
const modelFigma = require('../models/figma');

/* GET users listing. */
router.get('/:userId/:themeId', async (req, res, next) => {

  const { userId, themeId } = req.params;
  if (!userId || !themeId) return next();

  try {

    const data = await modelFigma.findOne({user_id: userId, theme_id: themeId}).exec();
	console.log(data, "DATA");
    if (!data) return next();
    res.status(200).json(data);

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
            let checkAlerdyAdded = findFigma?.data?.filter(item => item.name === data.name);
            checkAlerdyAdded?.length ? 
            findFigma?.data?.map(item => {if(item.name === data.name) item = data}) 
            : findFigma?.data.push(data);
            modelFigma.findByIdAndUpdate(findFigma._id, { data: findFigma?.data }, { new: true }).exec(err => {
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
