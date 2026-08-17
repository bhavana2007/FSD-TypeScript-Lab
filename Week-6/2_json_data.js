// Week 6 - Lab 6
// ii) Send and receive JSON data

const express = require("express");
const app = express();

const PORT = 3001;
app.use(express.json());

app.get("/profile", (req, res) => {
    res.json({
        name: "Bhavana",
        branch: "AI & ML",
        semester: "III B.Tech"
    });
});

app.post("/profile", (req, res) => {
    const profile = req.body;

    res.status(201).json({
        message: "JSON data received successfully",
        data: profile
    });
});

app.listen(PORT, () => {
    console.log(`JSON server running at http://localhost:${PORT}`);
});
