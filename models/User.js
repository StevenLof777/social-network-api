const { Schema, model } = require('mongoose');
const emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

<<<<<<< HEAD
=======

>>>>>>> 8466b44d3e44679272d7ac13297ef06c3c77ab8d
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
            validate: {
                validator: function(v) {
                  return emailRegex.test(v);
                },
                message: props => `${props.value} is not a valid email.`
              },
              required: [true, 'Email required']
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            }
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ]
    },
    {
        toJSON: {
          virtuals: true,
        },
        id: false,
      }
);

userSchema.virtual('friendCount').get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;