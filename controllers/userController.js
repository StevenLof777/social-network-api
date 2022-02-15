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

module.exports = {createUser, getUsers}

