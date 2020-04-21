const mongoose = require('mongoose');
const OfferSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  includes: {
    type: [String],
  },
  prices: [
    {
      price: {
        type: Number,
      },
      quantity: {
        type: Number,
      },
    },
  ],
  links: {
    type: [String],
  },
});
module.exports = Offer = mongoose.model('Offer', OfferSchema);
