const { Router } = require("express");
const songModel = require("../models/song.model");
const upload = require("../middlewares/upload.middleware");
const { uploadSong } = require("../controllers/song.controller");

const songRouter = Router();

// Post  /api/songs/
songRouter.post("/", upload.single("song"), uploadSong);

module.exports = songRouter;
