const express = require("express");
const cors = require("cors");
const noteModel = require("./model/note.model");
const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/notes", async (req, res) => {
  const { title, desc } = req.body;
  const note = await noteModel.create({
    title,
    desc,
  });
  res.status(201).json({
    message: "note created",
    note,
  });
});

module.exports = app;
