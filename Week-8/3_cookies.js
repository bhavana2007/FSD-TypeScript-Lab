// Week 8 - Lab 8
// iii) Read and Create Cookies

const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
const PORT = 3007;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get("/", (req, res) => {
    const savedName = req.cookies.studentName || "";

    res.render("cookies", {
        title: "Cookie Demo",
        savedName,
        message: ""
    });
});

app.post("/create-cookie", (req, res) => {
    const name = (req.body.name || "").trim();

    if (!name) {
        return res.render("cookies", {
            title: "Cookie Demo",
            savedName: req.cookies.studentName || "",
            message: "Please enter your name."
        });
    }

    // Create a cookie that remains available for one hour.
    res.cookie("studentName", name, {
        maxAge: 60 * 60 * 1000,
        httpOnly: true
    });

    res.render("cookies", {
        title: "Cookie Demo",
        savedName: name,
        message: "Cookie created successfully."
    });
});

app.get("/clear-cookie", (req, res) => {
    res.clearCookie("studentName");
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`Cookie server running at http://localhost:${PORT}/`);
});
