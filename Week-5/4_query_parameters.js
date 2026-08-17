// Week 5 - Lab 5
// iv) Use query parameters

const express = require("express");
const app = express();

const PORT = 3000;

app.get("/search", (req, res) => {
    const keyword = req.query.keyword || "none";
    const page = req.query.page || "1";

    res.json({
        message: "Query parameters received",
        keyword: keyword,
        page: page
    });
});

app.listen(PORT, () => {
    console.log(`Query parameter server running at http://localhost:${PORT}`);
});
