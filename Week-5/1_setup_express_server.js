// Week 5 - Lab 5
// i) Setup Express server

const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to Week 5 Express Server!");
});

app.listen(PORT, () => {
    console.log(`Express server is running at http://localhost:${PORT}`);
});
