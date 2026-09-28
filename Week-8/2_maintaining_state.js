// Week 8 - Lab 8
// ii) Maintaining State using Express Session

const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();
const PORT = 3006;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(
    session({
        secret: "state-management-secret",
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 10 * 60 * 1000 }
    })
);

app.get("/", (req, res) => {
    // Create the counter when the session is accessed for the first time.
    if (!req.session.visits) {
        req.session.visits = 0;
    }

    req.session.visits += 1;

    res.render("state", {
        title: "Session State",
        visits: req.session.visits
    });
});

app.get("/reset", (req, res) => {
    req.session.visits = 0;
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`State management server running at http://localhost:${PORT}/`);
});
