const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Offer = require('../../models/Offer');

// Get references rom logged in user
router.get('/me', auth, async (req, res) => {
  try {
    const offer = await Offer.find({
      user: req.user.id,
    });
    if (!offer) {
      return res.status(400).json({
        msg: 'There are no offers for this user',
      });
    }
    res.json(offer);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(' Server Error');
  }
});

// route post api/reference
// create or update current reference user
router.post('/', auth, async (req, res) => {
  const userId = req.user.id;
  const { title, description, includes, prices, links } = req.body;
  console.log(req.body)
  try {
    // create
    let offerFields = {
      user: req.user.id,
      title,
      description,
      includes,
      prices,
      links,
    };
    offer = new Offer(offerFields);
    await offer.save();
    res.json(offer);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

//Get api/offer/user/:user_id
// Get offer by user Id
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


//Get api/offer/user/:user_id
// Get all offers
router.get('/user', async (req, res) => {
  try {
    const offers = await Offer.find({});
    if (!offers)
      return res.status(400).json({ msg: 'there are no offers.' });
    res.json(offers);
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
router.delete('/:offerId', async (req, res) => {
  try {
    // remove offer
    await Offer.findByIdAndRemove(req.params.offerId);
    res.json({ msg: 'User deleted offer' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error');
  }
});
module.exports = router;
