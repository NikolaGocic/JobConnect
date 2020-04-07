const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    images: [
        {
            image: {
                type:String
            }
        }
    ],
    text: {
        type: String
    },
    date: {
        type: Date,
        default:Date.now
    },
    comments: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref:"User"
            },
            text: {
                type: String,
                required:true
            },
            name: {
                type: String
            },
            date:{
                type: Date,
                default: Date.now
            },
            like: [
                {
                    user: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: "User"
                    }
                }
            ]
        }
    ],
    like: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            }
        }
    ]

});

module.exports = Post = mongoose.model("Post",PostSchema);