const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend
} = require('../../controllers/userController');


router.route('/').get(getUsers).post(createUser);

router.route('/:userId').get(getSingleUser).put(updateUser).get(getSingleUser).delete(deleteUser);

router.route('/api/users/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;
