const mongoose = require('mongoose');
const OfferSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    Description: {
        type: String

    },
    Includes: {
        type: String
    },

    Price: {
        type: Number
    },
    link: {
        type: [String]

    }

});
module.exports = Offer = mongoose.model('Offer', OfferSchema)
