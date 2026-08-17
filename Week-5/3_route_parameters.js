// Week 5 - Lab 5
// iii) Work with route parameters

const express = require("express");
const app = express();

const PORT = 3000;

app.get("/student/:id", (req, res) => {
    const studentId = req.params.id;

    res.json({
        message: "Route parameter received",
        studentId: studentId
    });
});

app.get("/student/:id/course/:course", (req, res) => {
    const { id, course } = req.params;

    res.json({
        studentId: id,
        course: course
    });
});

app.listen(PORT, () => {
    console.log(`Route parameter server running at http://localhost:${PORT}`);
});
