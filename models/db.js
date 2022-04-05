const db = require('mongoose');
require('dotenv').config();

db.connect(`mongodb+srv://make:${process.env.DB_PASSWORD}@cluster0.rkcpg.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
.catch(err => console.log(err));

module.exports = db;