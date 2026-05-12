import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello docker!",
    success: true,
  });
});
app.get("/user", (req, res) => {
  const user = "Kanhaiya";
  res.status(200).json({
    message: `Hello ${user}!`,
    success: true,
  });
});

export default app;
