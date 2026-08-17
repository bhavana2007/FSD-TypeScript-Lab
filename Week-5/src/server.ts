import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.get("/", (_req: Request, res: Response) => {
  res.send("Week 5 Express Server is running successfully!");
});

app.get("/about", (_req: Request, res: Response) => {
  res.json({ course: "Full Stack Development Lab", week: 5, technology: "Express.js + TypeScript" });
});

app.get("/users/:id", (req: Request, res: Response) => {
  res.json({ message: "User route parameter received", userId: req.params.id });
});

app.get("/search", (req: Request, res: Response) => {
  const keyword = String(req.query.keyword ?? "");
  const page = Number(req.query.page ?? 1);
  res.json({ message: "Query parameters received", keyword, page });
});

app.get("/products/:category/:id", (req: Request, res: Response) => {
  const { category, id } = req.params;
  res.json({ message: "Dynamic URL handled successfully", category, productId: id });
});

app.listen(PORT, () => {
  console.log(`Week 5 server running at http://localhost:${PORT}`);
});
