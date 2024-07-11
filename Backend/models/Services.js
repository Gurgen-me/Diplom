const { ObjectId } = require('mongodb');
const {Schema, model} = require('mongoose');

const servicesSchema = new Schema({
    photo: {
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

module.exports = model('services', servicesSchema);