const { ObjectId } = require('mongodb');
const {Schema, model} = require('mongoose');

const portfolioSchema = new Schema({
    before: {
        type: String,
        required: true,
    },
    after: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    details: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = model('portfolio', portfolioSchema);