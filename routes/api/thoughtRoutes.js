const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');
 
router.route('/thoughts').get(getThoughts).post(createThought);

router.route('/thoughts/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

router.route('/thoughts/:thoughtId/reactions').post(addReaction).delete(deleteReaction);

module.exports = router;
