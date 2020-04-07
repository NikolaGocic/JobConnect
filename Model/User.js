const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    profilePicture: {
        type: String,
        default: "default"
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    bio: {
        type: String
    },
    experiance: [
        {
            title: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true

            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                required: true
            },
            description: {
                type: String
            }
        }
    ],
    education: [
        {
            title: {
                type: String,
                required: true
            },
            from: {
                type: Date,
                required: true

            },
            to: {
                type: Date
            },
            current: {
                type: Boolean,
                required: true
            },
            description: {
                type: String
            }
        }
    ],
    social: [
        {
            youtube: {
                type: String
            },
            instagram: {
                type: String
            },
            facebook: {
                type: String
            },
            linkedin: {

            }
        }
    ],
    friends: [
        {
            userID: {
                type: mongoose.Schema.Types.ObjectId,
                ref:"User"
            }
        }
    ]


});

module.exports = User = mongoose.model('User',UserSchema);