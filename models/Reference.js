const mongoose = require('mongoose');
const ReferenceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  position: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  credits: [
    {
      position: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  links: {
    type: [String],
  },
});
module.exports = Reference = mongoose.model('Reference ', ReferenceSchema);
