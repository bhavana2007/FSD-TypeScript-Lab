// Week 7 - Lab 7
// i) Configure EJS template engine

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3002;

// Configure EJS as the template engine.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
    res.render("home", {
        title: "Week 7 - Server-Side Rendering",
        studentName: "Bhavana",
        course: "Full Stack Development",
        message: "Welcome to server-side rendering with EJS!"
    });
});

app.listen(PORT, () => {
    console.log(`Week 7 template engine server running at http://localhost:${PORT}`);
});
