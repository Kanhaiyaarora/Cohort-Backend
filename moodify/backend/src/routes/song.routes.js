const { Router } = require("express");
const songModel = require("../models/song.model");
const upload = require("../middlewares/upload.middleware");
const { uploadSong, getSong } = require("../controllers/song.controller");

const songRouter = Router();

// Post  /api/songs/
songRouter.post("/", upload.single("song"), uploadSong);

// Get /api/song
songRouter.get("/",getSong)


module.exports = songRouter;
