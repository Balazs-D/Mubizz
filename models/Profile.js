const mongoose = require('mongoose');
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  profileName: {
    type: String,
  },
  avatar: {
    type: String,
  },
  profileMotto: {
    type: String,
  },
  description: {
    type: String,
  },
  services: [String],
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  languages: [String],
  skills: [String],
  reference: [
    {
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
      },
      description: {
        type: String,
        required: true,
      },
    },
  ],
  youtube: {
    type: String,
  },
  twitter: {
    type: String,
  },
  facebook: {
    type: String,
  },
  linkedin: {
    type: String,
  },
  instagram: {
    type: String,
  },
  discogs: {
    type: String,
  },
  bandcamp: {
    type: String,
  },
  soundcloud: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  offers: {
    type: [{}],
  },
});
module.exports = Profile = mongoose.model('profile', ProfileSchema);
