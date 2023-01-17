const db = require('./db');

const schema = new db.Schema({
    text_prompt: {
        type: String,
        required: true
    },
    logo_prompt: {
        type: String,
        required: true
    },
    image_prompt: {
        type: String,
        required: true
    },
    color_prompt: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = db.model('prompts', schema);