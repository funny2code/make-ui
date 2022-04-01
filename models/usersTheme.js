const { Schema } = require('mongoose');
const db = require('./db');

const schema = new db.Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        settings: Array,
        sidebar: Array
    },
    {
        timestamps: true
    }
);

module.exports = db.model('UserThemes', schema);