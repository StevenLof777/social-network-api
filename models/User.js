const { Schema, model } = require('mongoose');

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
        thoughts: {
            // Array of _id values referencing the Thought model
        },
        friends: {
            // Array of _id values referencing the User model (self-reference)
        }
    },
    {
        versionKey: false
    }
);

const User = model('user', userSchema);

module.exports = User;