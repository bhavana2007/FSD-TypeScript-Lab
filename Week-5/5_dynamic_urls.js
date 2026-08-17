// Week 5 - Lab 5
// v) Build dynamic URLs

const express = require("express");
const app = express();

const PORT = 3000;

app.get("/product/:category/:id", (req, res) => {
    const { category, id } = req.params;

    res.json({
        message: "Dynamic URL handled successfully",
        category: category,
        productId: id
    });
});

app.listen(PORT, () => {
    console.log(`Dynamic URL server running at http://localhost:${PORT}`);
});
