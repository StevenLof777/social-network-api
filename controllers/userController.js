// match: [/.+@.+\..+/, 'Must be a valid email address!'],
const User = require('../models/User')

const getUsers = (req, res) => {
    console.log('hit em up 2pac')
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
// Doesn't Work
const getSingleUser = (req, res) => {
    console.log('hit em up 2pac')
    User.findOne({ _id: req.params.userId })
    .then((user) => res.json(user))
    .catch(err => {
        console.log(err)
        return res.status(500).json(err);
    })
}
// Doesn't work
const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.userId })
    .then((users) => res.json(users))
    .catch(err => {
        console.log(err)
        return res.status(500).json(err);
    })
}
// Doesn't work
const deleteUser = (req, res) => {
    User.findOneAndDelete({ _id: req.params.userId })
    .then((users) => res.json(users))
    .catch(err => {
        console.log(err)
        return res.status(500).json(err);
    })
}

module.exports = { createUser, getUsers, getSingleUser, updateUser, deleteUser }