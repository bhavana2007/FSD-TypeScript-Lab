// Week 7 - Lab 7
// iii) Accept form inputs
// iv) Perform basic validation

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3004;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Parse URL-encoded form data.
app.use(express.urlencoded({ extended: true }));

app.get("/register", (req, res) => {
    res.render("register", {
        title: "Student Registration",
        errors: [],
        values: { name: "", email: "", course: "" }
    });
});

app.post("/register", (req, res) => {
    const { name, email, course } = req.body;
    const values = {
        name: (name || "").trim(),
        email: (email || "").trim(),
        course: (course || "").trim()
    };
    const errors = [];

    if (!values.name) {
        errors.push("Name is required.");
    }

    if (!values.email) {
        errors.push("Email is required.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
        errors.push("Enter a valid email address.");
    }

    if (!values.course) {
        errors.push("Course is required.");
    }

    if (errors.length > 0) {
        return res.status(400).render("register", {
            title: "Student Registration",
            errors,
            values
        });
    }

    res.render("success", {
        title: "Registration Successful",
        student: values
    });
});

app.listen(PORT, () => {
    console.log(`Form validation server running at http://localhost:${PORT}/register`);
});
