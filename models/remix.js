const db = require('./db');

const schema = new db.Schema({
        settings_data: {
            type: Object,
            required: true
        },
        index: {
            type: Object,
            required: true
        },
        product: {
            type: Object,
            required: true
        },
        collection_template: {
            type: Object,
            required: true
        },
        list_collections: {
            type: Object,
            required: true
        },
        page: {
            type: Object,
            required: true
        },
        blog: {
            type: Object,
            required: true
        },
        article: {
            type: Object,
            required: true
        },
        cart: {
            type: Object,
            required: true
        },
        password: {
            type: Object,
            required: true
        },
        404: {
            type: Object,
            required: true
        },
        search: {
            type: Object,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = db.model('remix', schema);