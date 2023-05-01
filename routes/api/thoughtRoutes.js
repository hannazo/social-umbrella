const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require('../../controllers/thoughtController');

// /api/thoughts GET all thoughts and POST new thought
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId GET, PUT and DELETE single thought
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// /api/thoughts/:thoughtId/reactions POST new reaction
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId DELETE reaction by Id
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;