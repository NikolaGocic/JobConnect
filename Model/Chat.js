const mongoose = require("mongoose");
const ChatSchema = new mongoose.Schema({
    user1: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    user2: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    msg: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user"
        },
        text: {
            type: String,
            required:true
        },
        date: {
            type: Date,
            default:Date.now
        }
    }]
});

        module.exports = User = mongoose.model("user", UserSchema);