# BasicToDo Backend

Simple Express + Mongoose backend for the ToDo app.

Features

- Mongoose model `Todo` (title, completed, createdAt)
- REST API: GET /api/todos, GET /api/todos/:id, POST /api/todos, PUT /api/todos/:id, DELETE /api/todos/:id
- Configurable MongoDB URL via `MONGO_URL` environment variable

Quick start (using Docker for MongoDB)

1. Start MongoDB locally with Docker (recommended):

```powershell
# run MongoDB container
docker run -d --name local-mongo -p 27017:27017 mongo:6
```

2. Install dependencies and start server

```powershell
cd D:\Devops\BasicToDo\Backend
npm install
# development (requires nodemon installed via devDependencies)
npm run dev
# or start normally
npm start
```

3. Test API (example)

```powershell
# create a todo
curl -X POST http://localhost:3000/api/todos -H "Content-Type: application/json" -d '{"title":"Buy milk"}'
# list todos
curl http://localhost:3000/api/todos
```

Notes

- You can override the MongoDB connection string with the `MONGO_URL` environment variable, for example: `MONGO_URL=mongodb://host:27017/mydb npm start`.
- If you prefer to run MongoDB locally (without Docker), ensure the MongoDB daemon is running on port 27017.

Next improvements (optional):

- Add validation and request body sanitization
- Add authentication
- Add authentication
- Add tests for API endpoints (Supertest + Jest)

Running tests (production-like integration tests)

- The project includes integration tests that run against an in-memory MongoDB so they simulate real DB behavior without needing a running Mongo instance.

1. Install dev dependencies:

```powershell
cd D:\Devops\BasicToDo\Backend
npm install
```

2. Run tests:

```powershell
npm test
```

These tests use `mongodb-memory-server` to create a temporary MongoDB instance in memory, then run the full CRUD flow (create, list, update, delete) against the Express app. This is a good practice to test production-like behavior quickly and reliably.
