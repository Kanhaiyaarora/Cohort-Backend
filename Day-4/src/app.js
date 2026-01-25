// 1. server create krna 2.server ko config krna

const express = require("express");

const app = express();
app.use(express.json());

const notes = [];

app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/notes", (req, res) => {
  console.log(notes);
  res.send(notes);
});

app.post("/notes", (req, res) => {
  notes.push(req.body);
  res.send("notes created");
});

app.delete("/notes/:id", (req, res) => {
  delete notes[req.params.id];
  console.log(notes);
  res.send("notes deleted");
});

app.patch("/notes/:id", (req, res) => {
  notes[req.params.id].desc = req.body.desc;
  res.send("Notes updated successfully");
});

app.put("/notes/:id", (req, res) => {
  notes[req.params.id] = req.body;
  res.send("notes fully updated");
});

module.exports = app;
