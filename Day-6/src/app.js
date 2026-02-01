const express = require("express");
const cors = require("cors");
const notesModel = require("./models/notes.model");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/notes", async (req, res) => {
  const { title, desc } = req.body;
  const note = await notesModel.create({
    title,
    desc,
  });
  res.status(201).json({
    message: "note created.",
    note,
  });
});

app.get("/api/notes", async (req, res) => {
  const notes = await notesModel.find();
  res.status(200).json({
    message: "Notes fetched successfully",
    notes,
  });
});

app.delete("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  await notesModel.findByIdAndDelete(id);
  res.status(200).json({
    message: "Note deleted",
  });
});

app.patch("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { desc } = req.body;
  await notesModel.findByIdAndUpdate(id, { desc });

  res.status(200).json({
    message: "Notes desc updated successfully",
  });
});

app.put("/api/notes/:id", async (req, res) => {
  const id = req.params.id;
  const { title, desc } = req.body;
  await notesModel.findByIdAndUpdate(id, { title, desc });

  res.status(200).json({
    message: "notes title and desc updated successfully",
  });
});

module.exports = app;
