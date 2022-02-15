const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/studentController');


router.route('/api/users').get(getUsers).post(createUser);

router.route('api/users/:userId').get(getSingleUser).delete(deleteUser);

router.route('/api/users/:userId/friends/').post(addAssignment);

router.route('/api/users/:userId/friends/:friendId').delete(removeAssignment);

module.exports = router;
