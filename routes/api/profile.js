const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const Profile = require('../../models/Profile')
const user = require('../../models/User')
//@ route GET api/profile
//@des  Test route
// @access Public

router.get('/me', auth, async (req, res) => {
    try {
        console.log("User ID:", req.user.id)
        const profile = await Profile.findOne({ user: req.user.id }).populate('user', ['name', 'avatar'])
        if (!profile) {
            return res.status(400).json({ meg: 'The is no profile for this user' })
        }
        res.json(profile)

    } 
    catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error')
    }

})

module.exports = router;