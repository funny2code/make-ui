const db = require('./db');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;

const schema = new db.Schema({
  email: {
    type: String, 
    required: true, 
    index: { unique: true }
  },
  password: { 
    type: String, 
    required: true 
  },
  billingID: String,
  plan: { 
    type: String, 
    enum: ['monthly', 'lifetime'], 
    default: 'monthly',
    required: true 
  },
  hasTrial: { 
    type: Boolean, 
    default: false 
  },
  endDate: { 
    type: Date, 
    default: null 
  }
});

schema.pre('save', function(next) {
    if (!this.isModified('password')) return next();
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(this.password, salt, function(err, hash) {
            if (err) return next(err);
            this.password = hash;
            next();
        });
    });
});
     
schema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = db.model('Users', schema);