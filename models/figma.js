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
    data: {
        type: Array
    }
});

module.exports = db.model('figma', schema);