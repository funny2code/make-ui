const express = require('express');
const router = express.Router();
const modelThemes = require('../models/themes');
const modelUsersThemes = require('../models/customer-themes');
const Pageres = require('pageres');
const path = require('path');
const fse = require('fs-extra');

/* GET Add Theme Popup. */
router.get('/:userId/:themeId', (req, res, next) => {
    
    const {userId, themeId} = req.params;
    if(!userId || !themeId || !req.session.user || userId !== req?.session?.user?._id) return next();

    res.render('addtheme', { 
      userId: userId,
      themeId: themeId
    });
  
});


/* POST Add Theme to Customer. */
router.post('/:userId/:themeId', async (req, res, next) => {

  const {userId, themeId} = req.params;
  const {themename, screen} = req.body;
  
  if(!themename) return res.status(400).send({status: 400, message: "Please enter theme name"});
  if(!userId || !themeId || !req.session.user || userId !== req?.session?.user?._id) return next();
  
  try {

    const theme = await modelThemes.findById(themeId).exec();
    if(!theme) return res.status(500).send({status: 500,  message: "SORRY! Please try again few minuts late."});
    
    theme?.theme_set.map(item => {if(item.theme_name) return item.theme_name = themename});

    const newUserTheme = new modelUsersThemes({
      user_id: userId,
      extend_id: themeId,
      theme_set: theme?.theme_set,
      app_sid: theme?.app_sid,
      theme_pag: theme?.theme_pag,
      theme_sec: theme?.theme_sec
    });

    newUserTheme.save(async (err, newtheme) => {
      if(err) return next();
      await fse.copy(path.join(__dirname, `../themes/${themeId}`), path.join(__dirname, `../users/user-${userId}/theme-${newtheme._id}`));
      if(screen){
        await new Pageres({
          delay: 2,
          launchOptions: {args: ['--no-sandbox', '--disable-setuid-sandbox']}
      })
      .src(req.protocol + '://' + req.get('host') + '/view/users/' + userId + '/themes/' + newtheme._id + '?page=Home%20Page&share=fkmksn@e34rra5454421s2dfsfwr2434524s', ['1440x900'], {crop: true, filename: 'screen-' + newtheme._id})
      .src(req.protocol + '://' + req.get('host') + '/view/users/' + userId + '/themes/' + newtheme._id + '?page=Home%20Page&share=fkmksn@e34rra5454421s2dfsfwr2434524s', ['414x736'], {crop: true, filename: 'm-screen-' + newtheme._id})
      .dest(path.join(__dirname, '../public/screens/'))
      .run();
      }
      return res.status(200).send({status: 200, theme_id: newtheme._id, message: "Sucsess!"});
    })

  } catch (err){
    console.log(err);
    res.status(500).send({status: 500,  message: "SORRY! Plese try again few minuts late."});
  }
  
});
  
module.exports = router;