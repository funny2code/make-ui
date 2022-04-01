const { Schema } = require('mongoose');
const db = require('./db');

const schema = new db.Schema({
        user_id: { 
            type: Schema.Types.ObjectId,
            require: true
        },
        theme_id: { 
            type: Schema.Types.ObjectId,
            require: true
        },
        name: {
            type: String, 
            require: true
        },
        sections: { 
            type: Array, 
            require: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = db.model('UserPages', schema);