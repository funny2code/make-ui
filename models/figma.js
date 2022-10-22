const db = require('./db');
const { Schema } = require('mongoose');

const schema = new db.Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    theme_id: {
        type: Schema.Types.ObjectId,
        required: true
    },
    page_name: {
        type: String,
        required: true
    },
    data: {
        type: Array,
        required: true
    }
});

module.exports = db.model('figma', schema);