const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  // deleteUser,
  // addFriend,
  // deleteFriend
} = require('../controllers/userController');


router.route('/api/users').get(getUsers).post(createUser);

router.route('/api/users/:userId').get(getSingleUser).put(updateUser);

// router.route('api/users/:userId').get(getSingleUser).delete(deleteUser);

// router.route('/api/users/:userId/friends/').post(addFriend);

// router.route('/api/users/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;
