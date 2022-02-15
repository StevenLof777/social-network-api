const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addFriend,
  deleteFriend
} = require('../../controllers/studentController');


router.route('/api/users').get(getUsers).post(createUser);

router.route('api/users/:userId').get(getSingleUser).put(updateUser);

router.route('api/users/:userId').get(getSingleUser).delete(deleteUser);

router.route('/api/users/:userId/friends/').post(addFriend);

router.route('/api/users/:userId/friends/:friendId').delete(deleteFriend);

module.exports = router;
