const db = require('./db');

const schema = new db.Schema({
        settings_schema: {
            type: Array,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = db.model('settings', schema);