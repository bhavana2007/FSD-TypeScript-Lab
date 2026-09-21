# Week 9 - MongoDB, CRUD Operations and RESTful API

## Objective

Implement a MongoDB database application using Mongoose, perform CRUD operations, and build a single-page application that communicates with the backend through RESTful APIs.

## Experiments

### i) Connect MongoDB using Mongoose and perform CRUD operations
The application connects an Express.js backend to MongoDB Atlas using Mongoose. The Student model demonstrates Create, Read, Update and Delete operations.

### ii) CRUD API endpoints

- **Create:** POST /api/students
- **Read all:** GET /api/students
- **Read one:** GET /api/students/:id
- **Update:** PUT /api/students/:id
- **Delete:** DELETE /api/students/:id

### iii) Single Page Application using RESTful APIs

The public folder contains a simple SPA using HTML, CSS and JavaScript. It uses the Fetch API to communicate with the Express REST API and supports adding, viewing, editing and deleting students without a full page reload.

## Technology

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- HTML
- CSS
- JavaScript

## Setup

1. Install Node.js.
2. Open the Week-9 folder.
3. Install dependencies:

\`\`\`bash
npm install
\`\`\`

4. Copy .env.example to .env.
5. Add your MongoDB Atlas connection string to .env.

Example:

\`\`\`env
PORT=3005
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fsd_week9?retryWrites=true&w=majority
\`\`\`

6. Start the application:

\`\`\`bash
npm start
\`\`\`

Open http://localhost:3005 in the browser.

For development:

\`\`\`bash
npm run dev
\`\`\`

## Sample Student

\`\`\`json
{
  "name": "Bhavana Kolli",
  "rollNumber": "24B01A4255",
  "branch": "AIML",
  "year": 3,
  "email": "bhavana@example.com"
}
\`\`\`

## Important

Do not commit the .env file. It is excluded through .gitignore.
