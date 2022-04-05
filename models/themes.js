const { Schema } = require('mongoose');
const db = require('./db');

const schema = new db.Schema({
    theme_set: {
        type: Array
    },
    app_sid: {
        type: Array
    },
    theme_pag: {
        type: Array
    },
    theme_sec: {
        type: Array
    }
});

module.exports = db.model('Themes', schema);