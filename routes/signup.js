const express = require('express');
const router = express.Router();
const make = require('../config/make');
const modelUsers = require('../models/Users');
const path = require('path');
const {constants} = require('fs');
const fs = require('fs').promises;
require('dotenv').config();
const Stripe = require('stripe');
const stripe = new Stripe(process.env.STRIPE_KEY);

/* GET SignUp. */
router.get('/', async (req, res, next) => {
  
  if(req.session.user) return next();
  res.render('signup', { make: make });
  
});

/* POST SignUp. */
router.post('/', async (req, res, next) => {

  if(req.session.user) return next();
  const {email, password, subscription, number, exp_month, exp_year, cvc} = req.body;
  if(!email || !password || !subscription || !number || !exp_month || !exp_year || !cvc) return res.status(400).send({status: 400, message: "Please enter all fields."});
  
  try {
    const findUser = await modelUsers.findOne({email}).exec();
    if(findUser) return res.status(409).send({status: 409, message: `This email (${email}) already exists.`});

    const customer = await stripe.customers.list({email: email});
    const createCustomer = await customer?.data?.length ? customer.data[0] : stripe.customers.create({email: email});

    const createPayment = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: number,
        exp_month: exp_month,
        exp_year: exp_year,
        cvc: cvc,
      },
    });

    const attached = await stripe.paymentMethods.attach(createPayment.id, {customer: createCustomer.id});
    const updateCustomerPaymentDefault = await stripe.customers.update({customer: createCustomer.id}, {invoice_settings: {default_payment_method: createPayment.id}});
    const price = await stripe.prices.retrieve(subscription);

    if (price.recurring !== null) {

      const newSubscription = await stripe.subscriptions.create({
        customer: createCustomer.id,
        items: [{ plan: subscription }],
        default_payment_method: createPayment.id,
      });
      
      const sendClient = {
        status: newSubscription.status
      }

      const newUser = await new modelUsers({
        email, 
        password, 
        subscription,
        plan: "monthly",
        status: "active"
      });
  
      newUser.save(async (err, user) => {
        if(err) return next();
        req.session.user = user;
        await fs.mkdir(path.join(__dirname, `../users/user-${user._id}`), {recursive: true});
        return res.status(200).send(sendClient);
      });
      
    } else {

      const newPaymentIntentes = await stripe.paymentIntents.create({
        customer: createCustomer.id,
        currency: price.currency,
        amount: price.unit_amount,
        payment_method: createPayment.id,
      });

      const sendClient = {
        status: newPaymentIntentes.status,
        client_secret: newPaymentIntentes.client_secret
      }
      
      const newUser = new modelUsers({
        email, 
        password, 
        subscription,
        plan: "lifetime",
        status: "active"
      });
  
      newUser.save(async (err, user) => {
        if(err) return next();
        req.session.user = user;
        await fs.mkdir(path.join(__dirname, `../users/user-${user._id}`), {recursive: true});
        return res.status(200).send(sendClient);
      });

    }

  } catch (err){
    console.log(err);
    return err.type === 'StripeCardError' ? res.status(err.raw.statusCode).send({status: err.raw.statusCode, message: err.raw.message}) : res.status(500).send({status: 500, message: "SORRY! Plese try again few minuts late."});
  }
  
});
  
module.exports = router;