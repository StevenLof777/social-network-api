// match: [/.+@.+\..+/, 'Must be a valid email address!'],
const { User, Reaction, Thought } = require('../models')

const getThoughts = (req, res) => {
    Thought.find({})
    .then((thoughts) => res.json(thoughts))
    .catch(err => {
        console.log(err)
        return res.status(500).json(err);
    })
}

const createThought = (req, res) => {
    Thought.create(req.body)
      .then((thought) => {
        return User.findOneAndUpdate(
          { _id: req.body.userId },
          { $push: { thoughts: thought._id } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'thought created, but found no user with that ID',
            })
          : res.json('Created the thought 🎉')
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
}

const getSingleThought = (req, res) => {
    Thought.findOne({ _id: req.params.thoughtId })
    .then((thought) => res.json(thought))
    .catch(err => {
        console.log(err)
        return res.status(500).json(err);
    })
}
const updateThought = (req, res) => {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
        )
    .then((thoughts) => res.json(thoughts))
    .catch(err => {
        console.log(err)
        return res.status(500).json(err);
    })
}

const deleteThought = (req, res) => {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
    .then((thought) =>
    !thought
      ? res.status(404).json({ message: 'No thought with that ID' })
      : Thought.deleteMany({ _id: { $in: thought.user } })
    )
    .then(() => res.json({ message: 'thought deleted' }))
    .catch((err) => res.status(500).json(err));
}

const addReaction = (req, res) => {
    Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true, new: true }
      )
        .then((thought) =>
          !thought
            ? res.status(404).json({ message: 'No thought with this id!' })
            : res.json(thought)
        )
        .catch((err) => res.status(500).json(err));
}

const deleteReaction = (req, res) => {
  Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { responseId: req.params.responseId } } },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
}

module.exports = { createThought, getThoughts, getSingleThought, updateThought, deleteThought, addReaction, deleteReaction }
