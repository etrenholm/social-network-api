const router = require('express').Router();

const {
    getAllThought,
    getThoughtById,
    addThought,
    addReaction,
    updateThought,
    removeThought,
    removeReaction
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

// POST new reaction /api/thoughts/:thoughtid/reactions
router
    .route('/:id/reactions')
    .post(addReaction)

// DELETE reaction at /api/thoughts/:thoughtid/reactions/:reactionId
router
    .route('/:id/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;