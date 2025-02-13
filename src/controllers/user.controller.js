/**
 * @module UserController
 * @description Controller handling user-related HTTP requests and responses
 */

const UserService = require("../services/user.service");

/**
 * Get all users from the system
 * @async
 * @function getAllUsers
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON response with users array
 */
const getAllUsers = async (req, res) => {
  try {
    const { users, count } = await UserService.getAll();

    res.status(200).json({
      success: true,
      data: users,
      count,
      message: "Users retrieved successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Create a new user
 * @async
 * @function createUser
 * @param {Object} req - Express request object
 * @param {Object} req.body - Request body containing user data
 * @param {string} req.body.firstName - User's first name
 * @param {string} req.body.lastName - User's last name
 * @param {string} req.body.email - User's email address
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON response with created user
 */
const createUser = async (req, res) => {
  try {
    const newUser = await UserService.create(req.body);
    console.log(newUser);
    
    res.status(201).json({
      success: true,
      data: newUser,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Get user by ID
 * @async
 * @function getUserById
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters
 * @param {string} req.params.id - User ID
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON response with user data
 */
const getUserById = async (req, res) => {
  try {
    const user = await UserService.getById(req.params.id);
    res.status(200).json({
      success: true,
      data: user,
      message: "User retrieved successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Update user completely
 * @async
 * @function updateUser
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters
 * @param {string} req.params.id - User ID
 * @param {Object} req.body - Full user data for update
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON response with updated user
 */
const updateUser = async (req, res) => {
  try {
    const user = await UserService.update(req.params.id, req.body, false);
    res.status(200).json({
      success: true,
      data: user,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Update user partially
 * @async
 * @function partialUpdateUser
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters
 * @param {string} req.params.id - User ID
 * @param {Object} req.body - Partial user data for update
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON response with updated user
 */
const partialUpdateUser = async (req, res) => {
  try {
    const user = await UserService.update(req.params.id, req.body, true);
    res.status(200).json({
      success: true,
      data: user,
      message: "User updated successfully",
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message,
    });
  }
};

/**
 * Delete user by ID
 * @async
 * @function deleteUser
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters
 * @param {string} req.params.id - User ID
 * @param {Object} res - Express response object
 * @returns {Promise<void>} JSON response with deleted user
 */
const deleteUser = async (req, res) => {
  try {
    const user = await UserService.remove(req.params.id);
    res.status(200).json({
      success: true,
      data: user,
      message: "User deleted successfully"
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  partialUpdateUser,
  deleteUser,
};
