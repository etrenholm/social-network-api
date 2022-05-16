const router = require('express').Router();

const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
} = require('../../controllers/user-controller');
const { update } = require('../../models/User');

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

module.exports = router;