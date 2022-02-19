const User = require('../models/User')

const getUsers = (req, res) => {
    User.find({})
    .then((users) => res.json(users))
    .catch(err => {
        console.log(err)
        return res.status(500).json(err);
    })
}

const createUser = (req, res) => {
    User.create(req.body)
    .then((user) => res.json(user))
    .catch(err => {
        console.log(err)
        return res.status(500).json(err);
    })
}

const getSingleUser = (req, res) => {
    User.findOne({ _id: req.params.userId })
    .then((user) => res.json(user))
    .catch(err => {
        console.log(err)
        return res.status(500).json(err);
    })
}
const updateUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
        )
    .then((users) => res.json(users))
    .catch(err => {
        console.log(err)
        return res.status(500).json(err);
    })
}

const deleteUser = (req, res) => {
    User.findOneAndRemove({ _id: req.params.userId })
    .then((User) =>
      !User
        ? res.status(404).json({ message: 'No such User exists' })
        : Course.findOneAndUpdate(
            { Users: req.params.userId },
            { $pull: { Users: req.params.userId } },
            { new: true }
          )
    )
    .then((course) =>
      !course
        ? res.status(404).json({
            message: 'User deleted, but no courses found',
          })
        : res.json({ message: 'User successfully deleted' })
    )
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
}

const addFriend = (req, res) => {
    console.log()
    User.findOneAndUpdate(
        { _id: req.params.userId },
        // Am I targeting the userId?
        { $addToSet: { friends: req.params.friendId } },
        { new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
}

const deleteFriend = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: { friendId: req.params.friendId } } },
        { runValidators: true, new: true }
      )
        .then((user) =>
          !user
            ? res.status(404).json({ message: 'No user with this id!' })
            : res.json(user)
        )
        .catch((err) => res.status(500).json(err));
}

module.exports = { createUser, getUsers, getSingleUser, updateUser, deleteUser, addFriend, deleteFriend }
