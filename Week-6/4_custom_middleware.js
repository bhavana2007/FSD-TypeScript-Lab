// Week 6 - Lab 6
// iv) Creating custom middleware

const express = require("express");
const app = express();

const PORT = 3001;

// Custom middleware
const checkUser = (req, res, next) => {
    console.log("Custom middleware executed");
    req.user = "Student";
    next();
};

app.use(checkUser);

app.get("/", (req, res) => {
    res.json({
        message: "Custom middleware example",
        user: req.user
    });
});

app.listen(PORT, () => {
    console.log(`Middleware server running at http://localhost:${PORT}`);
});
