import express, { NextFunction, Request, Response } from "express";

const app = express();
const PORT = 3001;

interface Student {
  id: number;
  name: string;
  course: string;
}

let students: Student[] = [
  { id: 1, name: "Ananya", course: "AIML" },
  { id: 2, name: "Rahul", course: "CSE" }
];

// Parse JSON request bodies.
app.use(express.json());

// Custom middleware for request logging.
app.use((req: Request, _res: Response, next: NextFunction) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next();
});

// GET - read all resources.
app.get("/students", (_req: Request, res: Response) => {
  res.json({ success: true, count: students.length, data: students });
});

// GET - read one resource.
app.get("/students/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const student = students.find((item) => item.id === id);

  if (!student) {
    res.status(404).json({ success: false, message: "Student not found" });
    return;
  }

  res.json({ success: true, data: student });
});

// POST - create a resource.
app.post("/students", (req: Request, res: Response) => {
  const { name, course } = req.body as Partial<Student>;

  if (!name || !course) {
    res.status(400).json({ success: false, message: "name and course are required" });
    return;
  }

  const newStudent: Student = {
    id: students.length ? Math.max(...students.map((item) => item.id)) + 1 : 1,
    name,
    course
  };

  students.push(newStudent);
  res.status(201).json({ success: true, message: "Student created", data: newStudent });
});

// PUT - update a resource.
app.put("/students/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const index = students.findIndex((item) => item.id === id);

  if (index === -1) {
    res.status(404).json({ success: false, message: "Student not found" });
    return;
  }

  const { name, course } = req.body as Partial<Student>;
  students[index] = {
    ...students[index],
    ...(name ? { name } : {}),
    ...(course ? { course } : {})
  };

  res.json({ success: true, message: "Student updated", data: students[index] });
});

// DELETE - delete a resource.
app.delete("/students/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const exists = students.some((item) => item.id === id);

  if (!exists) {
    res.status(404).json({ success: false, message: "Student not found" });
    return;
  }

  students = students.filter((item) => item.id !== id);
  res.json({ success: true, message: "Student deleted" });
});

app.listen(PORT, () => {
  console.log(`Week 6 REST API running at http://localhost:${PORT}`);
});
