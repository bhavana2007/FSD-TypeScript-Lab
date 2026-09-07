// Week 7 - Lab 7
// ii) Render dynamic values

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3003;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/students", (req, res) => {
    const students = [
        { id: 1, name: "Ananya", course: "AIML", marks: 88 },
        { id: 2, name: "Rahul", course: "CSE", marks: 91 },
        { id: 3, name: "Bhavana", course: "AIML", marks: 95 }
    ];

    res.render("students", {
        title: "Student Details",
        students
    });
});

app.listen(PORT, () => {
    console.log(`Dynamic values server running at http://localhost:${PORT}`);
});
