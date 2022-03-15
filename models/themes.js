const db = require('./db');

const schema = new db.Schema({
    settings: Array,
    sidebar: Array
});

module.exports = db.model('Themes', schema);