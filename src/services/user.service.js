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

/**
 * Mock database of users
 * @type {Array<Object>} Array of user objects
 */
const users = [
  {
    userId: "user0001",
    firstName: "Alice",
    lastName: "Smith",
    email: "alice.smith@example.com",
    isActive: true,
  },
  {
    userId: "user0002",
    firstName: "Bob",
    lastName: "Johnson",
    email: "bob.johnson@example.com",
    isActive: false,
  },
  {
    userId: "user0003",
    firstName: "Charlie",
    lastName: "Brown",
    email: "charlie.brown@example.com",
    isActive: true,
  },
  {
    userId: "user0004",
    firstName: "Diana",
    lastName: "Miller",
    email: "diana.miller@example.com",
    isActive: true,
  },
  {
    userId: "user0005",
    firstName: "Ethan",
    lastName: "Davis",
    email: "ethan.davis@example.com",
    isActive: false,
  },
];

/** @type {number} Tracks last used user ID for generation */
let lastId = 5;

/**
 * Generate a new unique user ID
 * @function generateUserId
 * @returns {string} New user ID in format 'userXXXX'
 */
const generateUserId = () => {
  lastId++;
  const newId = `user${lastId.toString().padStart(4, '0')}`;
  return newId
};

/**
 * Find user index in array by ID
 * @function findUserIndex
 * @param {string} id - User ID to search for
 * @throws {Error} If user is not found
 * @returns {number} Index of user in array
 */
const findUserIndex = (id) => {
  const index = users.findIndex(user => user.userId == id);
  if (index == -1)
    throw new Error('User not found');
  return index;
}

/**
 * Validate required user fields
 * @function validateRequiredFields
 * @param {Object} param0 - User data object
 * @param {string} param0.firstName - User's first name
 * @param {string} param0.lastName - User's last name
 * @param {string} param0.email - User's email
 * @throws {Error} If any required field is missing
 */
const validateRequiredFields = ({ firstName, lastName, email }) => {
  if (!firstName || !lastName || !email) {
    throw new Error('Missing required fields: firstName, lastName, email');
  }
};

/**
 * Get all users
 * @async
 * @function getAll
 * @returns {Promise<{users: Array<Object>, count: number}>} Users array and count
 */
const getAll = async () => {
  return {
    users,
    count: users.length
  }
}

/**
 * Get user by ID
 * @async
 * @function getById
 * @param {string} id - User ID to retrieve
 * @returns {Promise<Object>} User object
 */
const getById = async (id) => {
  const index = findUserIndex(id);
  return users[index];
}

/**
 * Create new user
 * @async
 * @function create
 * @param {Object} userData - User data
 * @returns {Promise<Object>} Created user object
 */
const create = async (userData) => {
  validateRequiredFields(userData);

  const newUser = {
    ...userData,
    userId: generateUserId(),
    isActive: true
  }

  users.push(newUser);
  return newUser;
}

/**
 * Update existing user
 * @async
 * @function update
 * @param {string} id - User ID to update
 * @param {Object} userData - New user data
 * @param {boolean} isPartialUpdate - If true, allows partial updates
 * @returns {Promise<Object>} Updated user object
 */
const update = async (id, userData, isPartialUpdate) => {
  if (!isPartialUpdate) validateRequiredFields(userData);
  const index = findUserIndex(id);
  users[index] = {
    ...users[index],
    ...userData,
    userId: id // Prevent UserId modification
  }

  return users[index];
}

/**
 * Remove user by ID
 * @async
 * @function remove
 * @param {string} id - User ID to remove
 * @returns {Promise<Object>} Removed user object
 */
const remove = async (id) => {
  const index = findUserIndex(id);
  return users.splice(index, 1)[0];
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}