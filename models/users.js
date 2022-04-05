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
  plan: {
    type: String,
    enum: ['monthly', 'lifetime'],
    default: 'monthly',
    required: true
  },
  status: {
    type: String,
    default: 'active',
    require: true
  }
  }, 
  {
    timestamps: true
  }
);

schema.pre("save", function (next) {
  const user = this

  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(SALT_WORK_FACTOR, function (saltError, salt) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.password, salt, function (hashError, hash) {
          if (hashError) {
            return next(hashError)
          }

          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
})

module.exports = db.model('users', schema);