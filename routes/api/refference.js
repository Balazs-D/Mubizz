const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Reference = require('../../models/Reference');
const User = require('../../models/User');
router.get('/me', auth, async (req, res) => {
  try {
    const reference = await Reference.findOne({
      User: req.User.id,
    });
    if (!reference) {
      return res.status(400).json({
        msg: 'There is no reference for this user',
      });
    }
    res.json(reference);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(' Server Error');
  }
});
// route post api/reference
// create or update current reference user
router.post('/', auth, async (req, res) => {
  console.log(res.user);
  const userId = req.user.id;
  const {
    user = userId,
    position,
    projectName,
    location,
    description,
    credits,
    links,
  } = req.body;
  try {
    // create
    let referenceFields = {
      user: req.user.id,
      position,
      projectName,
      location,
      description,
      credits,
      links,
    };
    reference = new Reference(referenceFields);
    await reference.save();
    res.json(reference);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//Get api/reference/user/:user_id
// Get reference by user Id
router.get('/user/:user_id', async (req, res) => {
  try {
    const reference = await Reference.findOne({
      user: req.params.user_id,
    });
    if (!reference)
      return res
        .status(400)
        .json({ msg: 'there is no reference for this user' });
    res.json(reference);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Reference not found' });
    }
    res.status(500).send('server Error');
  }
});
// Delete api/reference
// Delete reference
router.delete('/', auth, async (req, res) => {
  try {
    // remove reference
    await Reference.findByIdAndRemove({ user: req.user.id });
    res.json({ msg: 'User deleted reference' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error');
  }
});
module.exports = router;
