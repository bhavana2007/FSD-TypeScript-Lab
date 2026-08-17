// Week 6 - Lab 6
// v) Logging requests

const express = require("express");
const app = express();

const PORT = 3001;

// Request logging middleware
app.use((req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`[${time}] ${req.method} ${req.url}`);
    next();
});

app.get("/", (req, res) => {
    res.send("Request logging is working successfully!");
});

app.get("/students", (req, res) => {
    res.json([
        { id: 1, name: "Anu" },
        { id: 2, name: "Ravi" }
    ]);
});

app.listen(PORT, () => {
    console.log(`Logging server running at http://localhost:${PORT}`);
});
