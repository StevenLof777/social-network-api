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
        },
        thoughts: [Thought],
        friends: []
    },
    {
        versionKey: false
    }
);

const User = model('user', userSchema);

module.exports = User;