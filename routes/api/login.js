const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth')
const User = require('../../models/User')
const config = require('config')
const { check, validationResult } = require('express-validator')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
//@ route GET api/auth
//@des  Test route
// @access Public

// rout to get user info
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }

})

// login rout 
router.post('/', [

    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required')
        .exists()
],
    async (req, res) => {
        console.log(req.body, "login route ")
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }

        const { email, password } = req.body

        try {
            console.log("-------")
            let user = await User.findOne({ email })

            if (!user) {
                console.log(' !USER ')
                return res.status(400)
                    .json({ errors: [{ msg: 'Invalid Credentials' }] })
            }

            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res
                    .status(400)
                    .json({ errors: [{ msg: 'Invalid Credentials' }] })

            }


            console.log(user)
            const payload = {
                user: {
                    id: user.id
                }

            }
            const name = user.name
            //const email = user.email
            jwt.sign(
                payload,
                config.get('jwtSecret'),
                { expiresIn: 60 * 60 * 10 }, (err, token) => {
                    if (err) throw err;
                    res.json({ token, name, email })

                })


        } catch (err) {
            console.error(err.message)
            res.status(500).send('server error')

        }




    })

module.exports = router;
