// Week 6 - Lab 6
// i) Implement GET, POST, PUT, DELETE
// ii) Send and receive JSON
// iii) Delete a resource

const express = require("express");
const app = express();

const PORT = 3001;
app.use(express.json());

let students = [
    { id: 1, name: "Anu", branch: "AIML" },
    { id: 2, name: "Ravi", branch: "CSE" }
];

// GET - Read all students
app.get("/students", (req, res) => {
    res.json(students);
});

// POST - Add a student
app.post("/students", (req, res) => {
    const student = {
        id: students.length + 1,
        name: req.body.name,
        branch: req.body.branch
    };

    students.push(student);
    res.status(201).json(student);
});

// PUT - Update a student
app.put("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const student = students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    student.name = req.body.name || student.name;
    student.branch = req.body.branch || student.branch;

    res.json({ message: "Student updated successfully", student });
});

// DELETE - Delete a student
app.delete("/students/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const oldLength = students.length;

    students = students.filter(s => s.id !== id);

    if (students.length === oldLength) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student deleted successfully", students });
});

app.listen(PORT, () => {
    console.log(`REST API server running at http://localhost:${PORT}`);
});
