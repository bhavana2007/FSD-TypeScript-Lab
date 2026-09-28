// Week 8 - Lab 8
// i) Login-Logout and Maintaining Authentication State

const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const PORT = 3005;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

// Session middleware maintains login state between requests.
app.use(
    session({
        secret: "week8-lab-secret",
        resave: false,
        saveUninitialized: false,
        cookie: { maxAge: 10 * 60 * 1000 }
    })
);

app.get("/login", (req, res) => {
    if (req.session.user) {
        return res.redirect("/dashboard");
    }

    res.render("login", {
        title: "Student Login",
        error: ""
    });
});

app.post("/login", (req, res) => {
    const username = (req.body.username || "").trim();
    const password = req.body.password || "";

    if (username === "student" && password === "1234") {
        req.session.user = username;
        return res.redirect("/dashboard");
    }

    res.status(401).render("login", {
        title: "Student Login",
        error: "Invalid username or password."
    });
});

// Protected route - only logged-in users can access it.
app.get("/dashboard", (req, res) => {
    if (!req.session.user) {
        return res.redirect("/login");
    }

    res.render("dashboard", {
        title: "Student Dashboard",
        username: req.session.user
    });
});

app.get("/logout", (req, res) => {
    req.session.destroy((error) => {
        if (error) {
            return res.status(500).send("Unable to logout.");
        }

        res.redirect("/login");
    });
});

app.listen(PORT, () => {
    console.log(`Login/logout server running at http://localhost:${PORT}/login`);
});
