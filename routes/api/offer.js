const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Offer = require('../../models/Offer');
const User = require('../../models/User');
router.get('/me', auth, async (req, res) => {
  try {
    const offer = await Offer.findOne({
      User: req.User.id,
    });
    if (!offer) {
      return res.status(400).json({ msg: 'There is no offer for this user' });
    }
    res.json(offer);
  } catch (err) {
    console.log(err.message);
    res.status(500).send('Server Error');
  }
});
// route post api/offer
// create or update current offer user offer
router.post('/', auth, async (req, res) => {
  const userId = req.user.id;
  const { user = userId, title, description, includes, price, link } = req.body;
  try {
    // create
    let offerFields = {
      user: req.user.id,
      title,
      description,
      includes,
      price,
      link,
    };
    offer = new Offer(offerFields);
    console.log(offer);
    await offer.save();
    res.json(offer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error');
  }
});
// Get api/offer
// Get all offers
router.get('/', async (req, res) => {
  try {
    const offer = await Offer.find();
    res.json(offer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//Get api/offer/user/:user_id
// Get offer by user ID
router.get('/user/:user_id', async (req, res) => {
  try {
    const offer = await Offer.findOne({
      user: req.params.user_id,
    });
    if (!offer)
      return res.status(400).json({ msg: 'there is no offer for this user' });
    res.json(offer);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Offer not found' });
    }
    res.status(500).send('server Error');
  }
});
// Delete api/offer
// Delete offer
router.delete('/', auth, async (req, res) => {
  try {
    // remove offer
    await Offer.findByIdAndRemove({ user: req.user.id });
    res.json({ msg: 'User deleted offer' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error');
  }
});
module.exports = router;
