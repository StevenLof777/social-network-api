// const { Schema, model } = require('mongoose');
// const User = require('./User')

// const thoughtSchema = new Schema(
//     {
//         thoughtText: {
//             type: String,
//             required: true,
//             maxlength: 280,
//             minlength: 1,
//         },
//         createdAt: {
//             type: Date,
//             default: Date.now,
//         },
//         // User that created this thought
//         username: [User],
//         // Replies
//         // reactions: []
//     },
//     // Turn on later?
//     // {
//     //     toJSON: {
//     //       virtuals: true,
//     //     },
//     //     id: false,
//     //   }
// );

// thoughtSchema
//   .virtual('getResponses')
//   .get(function () {
//     return this.thoughts.length;
//   });

// const Thought = model('thought', thoughtSchema);

// module.exports = Thought;