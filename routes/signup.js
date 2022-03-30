const express = require('express');
const router = express.Router();
const make = require('../config/make');
const themesModel = require('../models/themes');
const UsersModel = require('../models/users');
const Stripe = require('stripe');
const stripe = new Stripe('sk_test_KvnHx6I2Whw62ETg5j6X2nTq');

/* GET SignUp. */
router.get('/', async (req, res, next) => {
  
  if(req.session.user) return;
  res.render('signup', { make: make });
  
});

/* POST SignUp. */
router.post('/', async (req, res, next) => {

  const {email, password, subscription, number, exp_month, exp_year, cvc} = req.body;
  if(!email || !password || !subscription || !number || !exp_month || !exp_year || !cvc) return res.status(400).send({status: 400, message: "Please enter all fields."});
  
  try {
    const findUser = await UsersModel.findOne({email}).exec();
    if(findUser) return res.status(409).send({status: 409, message: `This email (${email}) already exists.`});

    const createCustomer = await stripe.customers.create({
      email: email,
    });

    const createPayment = await stripe.paymentMethods.create({
      type: 'card',
      card: {
        number: number,
        exp_month: exp_month,
        exp_year: exp_year,
        cvc: cvc,
      },
    });

    const attached = await stripe.paymentMethods.attach(createPayment.id, {
      customer: createCustomer.id,
    });

    const updateCustomerPaymentDefault = await stripe.customers.update(createCustomer.id, {
      invoice_settings: {
        default_payment_method: createPayment.id,
      }
    });

    const price = await stripe.prices.retrieve(subscription);

    const newUser = new UsersModel({email, password, subscription});

    newUser.save((err, user) => {
      if(err) return next();
      req.session.user = user;
    });

    if (price.recurring !== null) {
      const newSubscription = await stripe.subscriptions.create({
        customer: createCustomer.id,
        items: [{ plan: subscription }],
        default_payment_method: createPayment.id,
      });
      let sendClient = {
        status: newSubscription.status
      }
      return res.status(200).send(sendClient);
    } else {
      const newPaymentIntentes = await stripe.paymentIntents.create({
        customer: createCustomer.id,
        currency: price.currency,
        amount: price.unit_amount,
        payment_method: createPayment.id,
      });
      let sendClient = {
        status: newPaymentIntentes.status,
        client_secret: newPaymentIntentes.client_secret
      }
      return res.status(200).send(sendClient);
    }

  } catch (err){
    return err.type === 'StripeCardError' ? res.status(err.raw.statusCode).send({status: err.raw.statusCode, message: err.raw.message}) : res.status(500).send({status: 500, message: "SORRY! Plese try again few minuts late."});
  }
  
});
  
module.exports = router;