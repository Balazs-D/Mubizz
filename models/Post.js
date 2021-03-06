const mongoose = require('mongoose')
const Schema = mongoose.Schema
const PostSchema = new Schema({
    User: {

        type: Schema.Types.ObjectId,
        ref: 'users'
    },

    text: {
        type: String,
        require: true
    },

    name: {
        type: String
    },

    avatar: {
        type: String
    },
    likes: [
        {
            User: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            }

        }
    ],
    comments: [
        {
            User: {
                type: Schema.Types.ObjectId,
                ref: 'users'
            },

            text: {
                type: String,
                required: true
            },

            name: {
                type: String
            },
            avatar: {
                type: String
            },

            date: {
                type: Date,
                default: Date.now
            }


        }
    ],
    date: {
        type: Date,
        default: Date.now
    }

})
module.exports = Post = mongoose.model('post', PostSchema);