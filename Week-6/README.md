# Week 6 - Request Response Life Cycle

## Objective
Understand the HTTP request-response lifecycle and implement RESTful GET, POST, PUT and DELETE methods using Express.js. The lab also demonstrates JSON handling, custom middleware and request logging.

## Lab Experiments
1. Implement GET, POST, PUT, DELETE
2. Send and receive JSON
3. Delete a resource
4. Create custom middleware
5. Log requests

## Run
```bash
npm install
npm run dev
```

Server: `http://localhost:3001`

## API Endpoints
- `GET /students`
- `GET /students/:id`
- `POST /students` with JSON `{ "name": "Meera", "course": "AIML" }`
- `PUT /students/:id` with JSON `{ "course": "CSE" }`
- `DELETE /students/:id`

The data is stored in memory for demonstration purposes.
