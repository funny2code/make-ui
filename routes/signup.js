const express = require('express');
const router = express.Router();
const make = require('../config/make');
const themesModel = require('../models/themes');
const UsersModel = require('../models/users');
const Stripe = require('stripe');
const stripe = new Stripe('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');

/* GET SignUp. */
router.get('/', async (req, res, next) => {
  
  if(req.session.user) return;
  res.render('signup', { make: make });
  
});

/* POST SignUp. */
router.post('/', async (req, res, next) => {

  const {email, password, subscription, number, exp_month, exp_year, cvc} = req.body;
  if(!email || !password || !subscription || !number || !exp_month || !exp_year || !cvc) return res.status(400).send("Please enter all fields.");
  
  try {
    const findUser = await UsersModel.findOne({email}).exec();
    if(findUser) return res.status(409).send(`This email (${email}) already exists.`);
    const customer = await stripe.customers.create({
      email: email,
    });
    if(!customer) return res.status(500).send('Sorry any issue please try again few minuts ago!')
    const newPaymentMethod = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: number,
        exp_month: exp_month,
        exp_year: exp_year,
        cvc: cvc,
      },
    });
    if(!newPaymentMethod) return  res.status(500).send('Sorry any issue please try again few minuts ago!');
    console.log(customer, newPaymentMethod)
    // const paymentMethod = await stripe.paymentMethods.attach(
    //   'pm_1KiYAZ2eZvKYlo2CgMZ7EcTR',
    //   {customer: 'cus_4QE4N83DfMpDkX'}
    // );

    const newUser = new UsersModel({email, password, subscription});
    if(!newUser) return res.status(500).send('Sorry any issue please try again few minuts ago!'); 
    newUser.save((err, user) => {
      if(err) return next();
      req.session.user = user;
      console.log(customer);
      return res.status(200).send("ok");
    });
  } catch (err){
    return next(err);
  }
  
});
  
module.exports = router;