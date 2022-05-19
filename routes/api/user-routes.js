const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/user-controller');

// GET and POST at /api/users
router
    .route('/')
    .get(getAllUser)
    .post(createUser)

// GET by id, UPDATE by id, DELETE by id at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser)

// BONUS: Remove a user's associated thoughts when deleted.

// POST friend at /api/users/:userId/friends
router
    .route('/:id/friends')
    .post(addFriend)

// DELETE friend at /api/users/:userId/friends/:friendId
router
    .route('/:id/friends/:friendId')
    .delete(removeFriend)

module.exports = router;