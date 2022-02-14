const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            // Date
            // Set default value to the current timestamp
            // Use a getter method to format the timestamp on query
        },
        // User that created this thought
        username: {
            type: String,
            required: true,
        },
        // Replies
        reactions: {
            // Array of nested documents created with the reactionSchema
        }
    },
);

const Thought = model('thought', thoughtSchema);

module.exports = Thought;