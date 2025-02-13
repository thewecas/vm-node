# User Management API (Node.js)

This project is a RESTful API built with Node.js and Express for managing user data. It follows a modular architecture to ensure maintainability and scalability.

## Overview

The API provides basic CRUD (Create, Read, Update, Delete) operations for managing user information. It's designed to be simple to use and easy to extend.

## Key Technologies

- **Node.js:** JavaScript runtime environment
- **Express:** Web application framework for Node.js

## Project Structure

```
vm-node/
├── index.js          # Main entry point
├── src/
│   ├── config/
│   │   └── app.config.js   # Application configuration (port, etc.)
│   ├── controllers/
│   │   └── user.controller.js # Handles HTTP requests for users
│   ├── routes/
│   │   └── user.routes.js    # Defines API endpoints for users
│   ├── services/
│   │   └── user.service.js   # Business logic for user operations
│   └── server.js         # Sets up the Express server
├── package.json      # Project dependencies and scripts
└── README.md         # This documentation
```

## Setup and Installation

1. **Clone the repository:**

    ```bash
    git clone <repository-url>
    cd vm-node
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Configure the application:**

    - Edit `src/config/app.config.js` to set the desired port number or other configuration options.

4. **Start the server:**

    ```bash
    npm start
    ```

    The server will start and listen for incoming requests on the configured port (default: 3000).

## API Endpoints

### Users

| Method | Endpoint      | Description         | Request Body                                    |
|--------|--------------|---------------------|------------------------------------------------|
| GET    | /users       | Get all users       | -                                              |
| POST   | /users       | Create new user     | `{ firstName, lastName, email }`               |
| GET    | /users/:id   | Get user by ID      | -                                              |
| PUT    | /users/:id   | Update user (full)  | `{ firstName, lastName, email }`               |
| PATCH  | /users/:id   | Update user (partial)| `{ firstName?, lastName?, email? }`            |
| DELETE | /users/:id   | Delete user         | -                                              |

### Example Requests and Responses

#### Get All Users

```bash
GET http://localhost:3000/users
```

Response:
```json
{
  "success": true,
  "data": [
    {
      "userId": "user0001",
      "firstName": "Alice",
      "lastName": "Smith",
      "email": "alice.smith@example.com",
      "isActive": true
    }
  ],
  "count": 1,
  "message": "Users retrieved successfully"
}
```

#### Create User

```bash
POST http://localhost:3000/users
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "userId": "user0006",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com",
    "isActive": true
  },
  "message": "User created successfully"
}
```

#### Get User by ID

```bash
GET http://localhost:3000/users/user0001
```

Response:
```json
{
  "success": true,
  "data": {
    "userId": "user0001",
    "firstName": "Alice",
    "lastName": "Smith",
    "email": "alice.smith@example.com",
    "isActive": true
  },
  "message": "User retrieved successfully"
}
```

#### Update User (Full)

```bash
PUT http://localhost:3000/users/user0001
Content-Type: application/json

{
  "firstName": "Alice",
  "lastName": "Johnson",
  "email": "alice.johnson@example.com"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "userId": "user0001",
    "firstName": "Alice",
    "lastName": "Johnson",
    "email": "alice.johnson@example.com",
    "isActive": true
  },
  "message": "User updated successfully"
}
```

#### Update User (Partial)

```bash
PATCH http://localhost:3000/users/user0001
Content-Type: application/json

{
  "lastName": "Brown"
}
```

Response:
```json
{
  "success": true,
  "data": {
    "userId": "user0001",
    "firstName": "Alice",
    "lastName": "Brown",
    "email": "alice.smith@example.com",
    "isActive": true
  },
  "message": "User updated successfully"
}
```

#### Delete User

```bash
DELETE http://localhost:3000/users/user0001
```

Response:
```json
{
  "success": true,
  "data": {
    "userId": "user0001",
    "firstName": "Alice",
    "lastName": "Smith",
    "email": "alice.smith@example.com",
    "isActive": true
  },
  "message": "User deleted successfully"
}
```

## Error Handling

The API returns consistent error responses:

```json
{
  "success": false,
  "message": "Error description"
}
```

HTTP Status Codes:
- 200: Success
- 201: Created
- 400: Bad Request
- 404: Not Found
- 500: Server Error

## Development

To start the server in development mode with auto-reload:

```bash
npm run serve
```

## License

ISC

## Author

Vikas M