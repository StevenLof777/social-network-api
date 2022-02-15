const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought
} = require('../../controllers/studentController');


router.route('/api/users').get(getThoughts).post(createThought);

router.route('api/users/:userId').get(getSingleThought).put(updateThought);

router.route('api/users/:userId').get(getSingleThought).delete(deleteThought);

router.route('/api/users/:userId/friends/').post();

router.route('/api/users/:userId/friends/:friendId').delete();

module.exports = router;
