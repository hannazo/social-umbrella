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

// /api/users GET all users and POST new user
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId GET, PUT and DELETE single user
router.route('/:userId').get(getSingleUser).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId POST and DELETE friend by Id
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;