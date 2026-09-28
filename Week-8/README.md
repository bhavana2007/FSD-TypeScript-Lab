# Week 8 - Sessions, Authentication and Cookies

## Objective

Implement login/logout, maintain user state using sessions, and create/read cookies using Express.js.

## Experiments

1. Login and Logout using Express Session
2. Maintaining State using Session Data
3. Creating and Reading Cookies using Cookie Parser

## Technology

- Node.js
- Express.js
- Express Session
- EJS
- Cookie Parser

## Installation

From the `Week-8` directory:

```bash
npm install express express-session ejs cookie-parser
```

## Run

Run each experiment separately:

```bash
node 1_login_logout.js
node 2_maintaining_state.js
node 3_cookies.js
```

### Experiment 1 - Login and Logout

Open:

`http://localhost:3005/login`

Demo credentials:

- Username: `student`
- Password: `1234`

The application stores the logged-in user in a session. The dashboard is protected and logout destroys the session.

### Experiment 2 - Maintaining State

Open:

`http://localhost:3006/`

The application stores a visit counter in the session. Refresh the page to see the state maintained across requests.

### Experiment 3 - Create and Read Cookies

Open:

`http://localhost:3007/`

Enter a name and create a cookie. The next page reads the cookie and displays the stored value. The cookie can also be cleared.

## Learning Outcome

- Understand session-based authentication.
- Maintain state between HTTP requests.
- Create, read and clear cookies.
- Protect routes using session data.
