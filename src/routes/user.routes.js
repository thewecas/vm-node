const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");

/**
 * Root path routes ("/")
 * @route {GET} /users - Retrieve all users
 * @route {POST} /users - Create a new user
 */
router
  .route("/")
  .get(UserController.getAllUsers)
  .post(UserController.createUser);



/**
 * User-specific routes ("/:id")
 * @route {GET} /users/:id - Retrieve a specific user by ID
 * @route {PUT} /users/:id - Complete update of a user
 * @route {PATCH} /users/:id - Partial update of a user
 * @route {DELETE} /users/:id - Delete a user
 * @param {string} id - User identifier
 */
router
  .route("/:id")
  .get(UserController.getUserById)
  .put(UserController.updateUser)
  .patch(UserController.partialUpdateUser)
  .delete(UserController.deleteUser);

module.exports = router;
