// Week 6 - Lab 6
// iii) Delete a resource

const express = require("express");
const app = express();

const PORT = 3001;

let books = [
    { id: 1, title: "JavaScript Basics" },
    { id: 2, title: "ExpressJS Guide" },
    { id: 3, title: "NodeJS Fundamentals" }
];

app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    books = books.filter(b => b.id !== id);

    res.json({
        message: "Book deleted successfully",
        remainingBooks: books
    });
});

app.listen(PORT, () => {
    console.log(`Delete resource server running at http://localhost:${PORT}`);
});
