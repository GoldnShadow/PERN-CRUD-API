# PERN CRUD API

Minimal PERN (Postgres + Express + Node) CRUD API for users.

## Quick overview
- REST API to create, read, update, delete users.
- Uses PostgreSQL via `pg` connection pool ([src/config/db.js](src/config/db.js)).
- Routes are defined in [src/routes/userRoutes.js](src/routes/userRoutes.js) and handled by controller functions in [src/controllers/userController.js](src/controllers/userController.js): [`createUser`](src/controllers/userController.js), [`getAllUsers`](src/controllers/userController.js), [`getUserById`](src/controllers/userController.js), [`updateUser`](src/controllers/userController.js), [`deleteUser`](src/controllers/userController.js).
- Database queries live in [src/models/userModel.js](src/models/userModel.js) (services: [`createUserService`](src/models/userModel.js), [`getAllUsersService`](src/models/userModel.js), [`getUserByIdService`](src/models/userModel.js), [`updateUserService`](src/models/userModel.js), [`deleteUserService`](src/models/userModel.js)).
- Input validation with Joi in [src/middleware/inputValidator.js](src/middleware/inputValidator.js) (`validateUser`) and centralized errors in [src/middleware/errorHandler.js](src/middleware/errorHandler.js) (`errorHandling`).
- Table creation helper: [src/data/createUserTable.js](src/data/createUserTable.js) (`createUserTable`). A SQL version is at [src/data/data.sql](src/data/data.sql).

## Prerequisites
- Node.js (v16+ recommended)
- PostgreSQL database

## Setup
1. Install:
   ```sh
   npm install
   ```
2. Configure database in [src/.env](src/.env):
   - PORT, DB_USER, DB_HOST, DB_NAME, DB_PORT, DB_PASSWORD

3. Start dev server:
   ```sh
   npm run dev
   ```

The server will run on the port from [src/.env](src/.env) or default 3001. On start the app calls [`createUserTable`](src/data/createUserTable.js) to ensure the `users` table exists.

## API Endpoints
Base path: /api

- POST /api/user
  - Create a user (body: { name, email })
  - Validation: [`validateUser`](src/middleware/inputValidator.js)
- GET /api/user
  - Get all users
- GET /api/user/:id
  - Get user by id
- PUT /api/user/:id
  - Update user (body: { name, email })
  - Validation: [`validateUser`](src/middleware/inputValidator.js)
- DELETE /api/user/:id
  - Delete user

Requests return JSON with standardized shape from controller `handleResponse` in [src/controllers/userController.js](src/controllers/userController.js).

## Notes & troubleshooting
- DB connection pool is exported from [src/config/db.js](src/config/db.js) as `pool`. Ensure [.env](src/.env) values are correct.
- If migrations are needed, use [src/data/data.sql](src/data/data.sql).
- Errors are handled centrally by [`errorHandling`](src/middleware/errorHandler.js).

## Scripts
- dev: nodemon start — see [package.json](package.json)

## Files of interest
- [src/index.js](src/index.js)
- [src/routes/userRoutes.js](src/routes/userRoutes.js)
- [src/controllers/userController.js](src/controllers/userController.js)
- [src/models/userModel.js](src/models/userModel.js)
- [src/config/db.js](src/config/db.js)
- [src/middleware/inputValidator.js](src/middleware/inputValidator.js)
- [src/middleware/errorHandler.js](src/middleware/errorHandler.js)
- [src/data/createUserTable.js](src/data/createUserTable.js)
- [src/data/data.sql](src/data/data.sql)
- [package.json](package.json)
