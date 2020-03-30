const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator/check')
const auth = require('../../middleware/auth')

const Post = require('../../models/Post')
const Profile = require('../../models/Profile')
const User = require('../../models/User')
//@ route POST api/posts
//@des  Create a post
// @access Private

router.post('/', [auth, [
    check('text', 'Text is required').not().isEmpty()

]], async (req, res) => {
    console.errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const user = await User.findById(req.user.id).select('-password')

        const newPost = new Post({
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        })

        const post = await newPost.save()

        res.json(post)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('server Error')
    }

}

)

//  Get api/posts
// Get post by 
router.get('/', auth, async (req, res) => {
    try {
        const posts = await Post.find().sort({ date: -1 })
        res.json(posts)
    } catch (err) {

        console.error(err.message)
        res.status(500).send('server Error')

    }

})

//  Get api/posts/:id
// Get post by ID
router.get('/:id', auth, async (req, res) => {
    try {
        const posts = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' })
        }
        res.json(posts)
    } catch (err) {
        console.error(err.message)

        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' })
        }
        res.status(500).send('server Error')

    }

})

//  DELETE api/posts/:id
// Delete a post 
router.delete('/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if (!post) {
            return res.status(404).json({ msg: 'Post not found' })
        }
        // check user
        if (post.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' })
        }

        await post.remove()

        res.json({ msg: 'Post removed' })
    } catch (err) {

        console.error(err.message)
        if (err.kind === 'ObjectId') {
            return res.status(404).json({ msg: 'Post not found' })
        }

        res.status(500).send('server Error')

    }

})
//  PUT api/posts/like/:id
// like a post 
router.put('/Like/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        // check if the post has already been liked
        if (post.likes.filter(like => like.user.toString() === req.user.id).length > 0) {
            return res.status(400).json({ meg: 'Post already liked' })
        }
        post.likes.unshift({ user: req.user.id })
        await post.save()

        res.json(post.likes)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')

    }
})

//  PUT api/posts/unlike/:id
// like a post 
router.put('/unLike/:id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        // check if the post has already been liked
        if (post.likes.filter(like => like.user.toString() === req.user.id).length === 0) {
            return res.status(400).json({ meg: 'Post has not yet been liked' })
        }
        // Get remove index
        const removeIndex = post.likes.map(like => like.user.toString().indexOf(req.user.id))

        post.likes.splice(removeIndex, 1)
        await post.save()

        res.json(post.likes)
    } catch (err) {
        console.error(err.message)
        res.status(500).send('Server Error')

    }
})
//@ route POST api/posts/comment/:id
//@des  comment on a post
// @access Private

router.post('/comment/:id', [auth, [
    check('text', 'Text is required').not().isEmpty()

]], async (req, res) => {
    console.errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    try {
        const user = await User.findById(req.user.id).select('-password')
        const post = await Post.findById(req.params.id)


        const newComment = {
            text: req.body.text,
            name: user.name,
            avatar: user.avatar,
            user: req.user.id
        }

        //add the comment to the post
        post.comment.unshift(newComment)

        await post.save()

        res.json(post.comments)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('server Error')
    }

}

)
//@ route DELETE api/posts/comment/:id/:comment_id
//@des   DELETE comment 
// @access Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        //pull out comment 
        const comment = post.comment.find(comment => comment.id === req.params.comment_id)

        // make sure comment exist 
        if (!comment) {
            return res.status(404).json({ mes: 'comment does not exist' })
        }

        // check user

        if (comment.user.toString() !== req.user.id) {
            return res.status(404).json({ mes: 'User not authorized' })
        }
        //get remove index   
        const removeIndex = post.comments.map(comment => comment.user.toString().indexOf(req.user.id))

        post.comments.splice(removeIndex, 1)
        await post.save()

        res.json(post.comments)

    } catch (err) {
        console.error(err.message)
        res.status(500).send('server Error')

    }


})


module.exports = router;