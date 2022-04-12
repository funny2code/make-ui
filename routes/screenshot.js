const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');


router.get('/:userId/themes/:themeId', async (req, res, next) => {

    const { userId, themeId } = req.params;
    if (!userId || !themeId || !req.session.user || userId === req?.session?.user?._id) return res.status(400).send({status: 400, message: "Error"});
    
    
    try {
        
        return res.status(200).send({status: 200, message: 'sucssess'});
    } catch(err){
        console.log(err);
        return res.status(400).send({status: 400, message: "Error"});
    }

});


module.exports = router;