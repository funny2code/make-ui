const express = require('express');
const router = express.Router();

/* GET Logout function. */
router.get('/', async (req, res, next) => {
  
  if(req.session.user){
    req.session.destroy((err) => {
        if(err) return res.sendStatus(500).send("Error");
        return res.redirect('/');
    })
  } else {
      return next();
  }
  
});

module.exports = router;