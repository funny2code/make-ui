const { Schema } = require('mongoose');
const db = require('./db');

const schema = new db.Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        extend_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
        settings_schema: {
            type: Array
        },
        pages: {
            type: Array
        },
        sections_schema: {
            type: Array
        }
    },
    {
        timestamps: true
    }
);

module.exports = db.model('usersthemes', schema);