const { Schema } = require('mongoose');
const db = require('./db');

const schema = new db.Schema({
    theme_id: { type: Schema.Types.ObjectId, ref: 'Themes', require: true},
    name: {type: String, require: true},
    sections: { type: Array, require: true}
});

module.exports = db.model('Pages', schema);