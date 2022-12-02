const db = require('./db');

const schema = new db.Schema({
        template_handle: {
            type: String,
            required: true
        },
        file_handle: {
            type: String,
            required: true
        },
        section: {
            type: Array,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = db.model('sections', schema);