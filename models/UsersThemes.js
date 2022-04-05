const { Schema } = require('mongoose');
const db = require('./db');

const schema = new db.Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            required: true
        },
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
    },
    {
        timestamps: true
    }
);

module.exports = db.model('usersthemes', schema);