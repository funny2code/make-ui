const express = require('express');
const router = express.Router();
const make = require('../config/make');
const themesModel = require('../models/themes');
const UsersModel = require('../models/users');
const Stripe = require('stripe');
const stripe = new Stripe('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');

/* GET SignUp. */
router.get('/', async (req, res, next) => {
    
  // const customer = await stripe.customers.create({
  //   email: 'customer@example.com',
  // });
  
  res.render('signup', { make: make });
  
});

/* POST SignUp. */
router.post('/', async (req, res, next) => {
    
  const {email, password, subscribtion} = req.body;
  if(!email || !password || !subscribtion) return next();
  
  // try {
  //   themes = await themesModel.find({});
  // } catch (err){
  //   next(err);
  // }
  
  res.render('signup', { make: make });
  
});
  
module.exports = router;