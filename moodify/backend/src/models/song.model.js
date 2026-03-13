const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
  posterUrl: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  mood: {
    type: String,
    enum: {
      values: ["sad", "happy", "surprised", "angry"],
      message: "enum this is only allowed to be sad, happy, surprised or angry",
    },
  },
});

const songModel = mongoose.model("songs", songSchema);
module.exports = songModel;
