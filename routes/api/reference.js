const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Reference = require('../../models/Reference');

// Get references rom logged in user
router.get('/me', auth, async (req, res) => {
  try {
    const reference = await Reference.find({
      user: req.user.id,
    });
    if (!reference) {
      return res.status(400).json({
        msg: 'There are no references for this user',
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
  const userId = req.user.id;
  const {
    position,
    projectName,
    location,
    description,
    credits,
    links,
  } = req.body;
    console.log(req.body);

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
router.delete('/:referenceId', async (req, res) => {
  try {
    // remove reference
    await Reference.findByIdAndRemove(req.params.referenceId);
    res.json({ msg: 'User deleted reference' });
    
  } catch (err) {
    console.error(err.message);
    res.status(500).send('server Error');
  }
});
module.exports = router;
