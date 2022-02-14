const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            // Trimmed?
            // { $trim: { input: <string>,  chars: <string> } }
        },
        email: {
            type: String,
            required: true,
            unique: true,
            // Match
            $match: {},
        },
        thoughts: {
            // Array of _id values referencing the Thought model
        },
        friends: {
            // Array of _id values referencing the User model (self-reference)
        }
    },
);

const User = model('user', userSchema);

module.exports = User;