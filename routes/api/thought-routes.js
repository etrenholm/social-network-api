const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    updateThought,
    removeThought
} = require('../../controllers/thought-controller');

// GET and Post at /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(addThought)

// GET by id, UPDATE by id, DELETE by id at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought)

// POST new reaction, DELETE reaction at /api/thoughts/:thoughtid/reactions
router
    .route('/:thoughtId/:reactionId')
    .post()
    .delete()

module.exports = router;