const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Match
            
        },
        // thoughts: [Thought],
        friends: [
            {
                // How to reference a user id
                type: Schema.Types.ObjectId,
                ref: 'User'
            }
        ]
    },
    {
        versionKey: false
    }
);

const User = model('user', userSchema);

module.exports = User;