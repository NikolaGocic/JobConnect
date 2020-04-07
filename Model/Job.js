const mongoose = require('mongoose');
const JobSchema = new mongoose.Schema({
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
    datePosted: {
        type: Date,
        default:Date.now
    },
    dateBegin: {
        type: Date,
        default:Date.now
    },
    dateEnd: {
        type: Date,
        default:Date.now
    },
    salary: {
        type: String,
        required:true,
    },
    bid: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            text: {
                type:String
            },
            value: {
                type: String,
                required:true
            },
            date: {
                type: Date,
                default:Date.now
            }
        }
    ],
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
            }
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

module.exports = Job = mongoose.model("Job",JobSchema);