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
    skills,
    reference,
    youtube,
    twitter,
    facebook,
    linkedin,
    instagram,
    discogs,
    bandcamp,
    soundcloud,
    offers,
  } = req.body;
  console.log(req.body);
  try {
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      //Build social object
      profile.social = {};
      profile.social.youtube = youtube;
      profile.social.twitter = twitter;
      profile.social.facebook = facebook;
      profile.social.linkedin = linkedin;
      profile.social.instagram = instagram;
      profile.social.discogs = discogs;
      profile.social.bandcamp = bandcamp;
      profile.social.soundcloud = soundcloud;

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
        skills,
        reference,
        youtube,
        twitter,
        facebook,
        linkedin,
        instagram,
        discogs,
        bandcamp,
        soundcloud,
        offers,
      };

      console.log('89: ' + profile.social);
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
      skills,
      reference,
      youtube,
      twitter,
      facebook,
      linkedin,
      instagram,
      discogs,
      bandcamp,
      soundcloud,
      offers,
    };

    profile = new Profile(profileFields);

    //Build social object
    profile.social = {};
    profile.social.youtube = youtube;
    profile.social.twitter = twitter;
    profile.social.facebook = facebook;
    profile.social.linkedin = linkedin;
    profile.social.instagram = instagram;
    profile.social.discogs = discogs;
    profile.social.bandcamp = bandcamp;
    profile.social.soundcloud = soundcloud;

    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error');
  }
});
// Get api/profile
//  Get all profiles
/*router.get('/', async (req, res) => {
  try {
    console.log(Profile);
    let profile = await Profile.findOne({ user: req.user.id });
    if (profile) {
      // update
      let profileFields = {
        user: req.user.id,
        profileName,
        profileMotto,
        description,
        services,
        website,
        location,
        languages,
        skills,
        reference,
        social,
        offers
      };
      profile = await Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      );
      return res.json(profile);
    }
    //create
    let profileFields = {
      user: req.user.id,
      profileName,
      profileMotto,
      description,
      services,
      website,
      location,
      languages,
      skills,
      reference,
      social,
      offers
    };
    profile = new Profile(profileFields);
    console.log(profile);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error');
  }
});
*/
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
    res.json(profiles);
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

//  PUT api/profile/experience
//  add profile experience
router.put(
  '/experience',
  [auth, [check('title', 'Title is required').not().isEmpty()]],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { title } = req.body;
    const newExp = {
      title,
    };
    try {
      const profile = await Profile.findOne({ user: req.user.id });
      profile.experience.unshift(newExp);
      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Errors');
    }
  }
);
// Delete api/profile/experience/:exp_id
// Delete experience from profile
router.delete('/experience/:exp_id', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id });
    // Get remove index
    const removeIndex = profile.experience
      .map((item) => item.id)
      .indexOf(req.param.exp_id);
    profile.experience.splice(removeIndex, 1);
    await profile.save();
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Errors');
  }
});
module.exports = router;
