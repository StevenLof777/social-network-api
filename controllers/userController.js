// match: [/.+@.+\..+/, 'Must be a valid email address!'],
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
    User.findOneAndDelete({ _id: req.params.userId })
    .then((user) =>
    !user
      ? res.status(404).json({ message: 'No user with that ID' })
      : Student.deleteMany({ _id: { $in: user.students } })
    )
    .then(() => res.json({ message: 'User deleted' }))
    .catch((err) => res.status(500).json(err));
}

const addFriend = (req, res) => {
    console.log('Add friend')
}

const deleteFriend = (req, res) => {
    console.log('Remove friend')
}

module.exports = { createUser, getUsers, getSingleUser, updateUser, deleteUser, addFriend, deleteFriend }
