// Week 5 - Lab 5
// ii) Define basic routes

const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page - Full Stack Development Lab");
});

app.get("/contact", (req, res) => {
    res.send("Contact Page");
});

app.listen(PORT, () => {
    console.log(`Basic routes server running at http://localhost:${PORT}`);
});
