const express = require('express');
const router = express.Router();
const make = require('../config/make');
const modelUsers = require('../models/Users');
const bcrypt = require('bcrypt');
const Stripe = require('stripe');
const stripe = new Stripe('sk_test_KvnHx6I2Whw62ETg5j6X2nTq');

/* GET Login. */
router.get('/', async (req, res, next) => {
  
  if(req.session.user) return;
  res.render('login', { make: make });
  
});

/* POST Login. */
router.post('/', async (req, res, next) => {

  const {email, password} = req.body;
  if(!email || !password) return res.status(400).send({status: 400, message: "Please enter all fields."});
  
  try {
    const findUser = await modelUsers.findOne({email}).exec();
    if(!findUser) return res.status(401).send({status: 401, message: "Email or password is incorrect!"});
    const checkPassowrd = bcrypt.compareSync(
        password,
        findUser.password
    );
    if(!checkPassowrd) return res.status(401).send({status: 401, message: "Email or password is incorrect!"});
    req.session.user = findUser;
    res.status(200).send({status: 200, message: "Sucsess!"});
  } catch (err){
    res.status(500).send({status: 500, message: "SORRY! Plese try again few minuts late."});
  }
  
});
  
module.exports = router;