const db = require('./db');

const schema = new db.Schema({
    settings_schema: {
        type: Array
    },
    pages: {
        type: Array
    },
    sections_schema: {
        type: Array
    }
});

module.exports = db.model('themes', schema);