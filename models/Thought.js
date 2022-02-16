const { Schema, model } = require('mongoose');
const User = require('./User')

const reactionSchema = new Schema(
  {
    reactions: []
  }
)


const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        // username: [User],
        reactions: [
          {
            type: Schema.Types.ObjectId,
            ref: 'User'
          }
        ]
    },

    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);


thoughtSchema
  .virtual('getResponses')
  .get(function () {
    return this.thoughts.length;
  });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;