import express from "express";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.get("/api/hello", (req, res) => {
  res.status(200).json({ message: "Hello World" });
});

app.get("/api/health", (req, res) => {
  res.status(200).json({ message: "Health checking api", status: "OK" });
});

app.get("/api/users", (req, res) => {
  const users = [
    { id: 1, name: "Kanhaiya Arora" },
    { id: 2, name: "Manish Sharma" },
    { id: 3, name: "Akshay Kumar" },
    { id: 4, name: "Rahul Gupta" },
  ];
  res.status(200).json(users);
});

app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});

export default app;
