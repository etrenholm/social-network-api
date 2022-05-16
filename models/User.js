const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: {
        type: String,
        required: 'Please enter a username',
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: 'Please enter an email address',
        unique: true,
        match: /.+\@.+\..+/
        // match a valid email address (Mongoose matching validation)
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})



const User = model('User', UserSchema);
module.exports = User;