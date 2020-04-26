const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const { check, validationResult } = require('express-validator');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    });
    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }
    res.json(profile);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});
//@ route post api/profile
//@des  create or update current users profile
// @access Private
//auth is middleware validation
router.post('/', auth, async (req, res) => {
  const userId = req.user.id;
  const {
    user = userId,
    profileName,
    avatar,
    profileMotto,
    description,
    services,
    website,
    location,
    languages,
    education,
    skills,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
    discogs,
    bandcamp,
    soundcloud,
  } = req.body;
  console.log(req.body);
  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      // update
      let profileFields = {
        // user: req.user.id,
        profileName,
        avatar,
        profileMotto,
        description,
        services,
        website,
        location,
        languages,
        education,
        skills,
        youtube,
        twitter,
        facebook,
        linkedin,
        instagram,
        discogs,
        bandcamp,
        soundcloud,
      };

      await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profileFields);
    }

    //create
    let profileFields = {
      user: req.user.id,
      profileName,
      avatar,
      profileMotto,
      description,
      services,
      website,
      location,
      languages,
      education,
      skills,
      youtube,
      twitter,
      facebook,
      linkedin,
      instagram,
      discogs,
      bandcamp,
      soundcloud,
    };

    profile = new Profile(profileFields);

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error');
  }
});

// Get api/profile
//  Get all profiles
router.get('/', async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error');
  }
});

router.get('/user/:user_id', async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    });
    if (!profile)
      return res.status(400).json({ msg: 'there is no profile for this user' });
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('server Error');
  }
});

router.delete('/', auth, async (req, res) => {
  try {
    //remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    //remove positive
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: 'User deleted' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error');
  }
});

module.exports = router;
