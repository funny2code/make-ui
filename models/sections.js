const { Schema } = require('mongoose');
const db = require('./db');

const schema = new db.Schema({
    theme_id: { type: Schema.Types.ObjectId, ref: 'Themes'},
    sections: { type: Array }
});

module.exports = db.model('Sections', schema);