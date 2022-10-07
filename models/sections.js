const db = require('./db');

const schema = new db.Schema({
    page_handle: {
        type: String,
        required: true
    },
    sections_schema: {
        type: Array,
        required: true
    }
    },
    {
        timestamps: true
    }
);

module.exports = db.model('sections', schema);