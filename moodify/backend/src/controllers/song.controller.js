const songModel = require("../models/song.model");
const id3 = require("node-id3");
const { uploadToImageKit } = require("../services/storage.service");

async function uploadSong(req, res) {
  const songBuffer = req.file.buffer;
  const { mood } = req.body;
  const tags = id3.read(songBuffer);

  const [songFile, posterFile] = await Promise.all([
    uploadToImageKit({
      buffer: songBuffer,
      filename: tags.title + ".mp3",
      folder: "/cohort-2/moodify/songs",
    }),
    uploadToImageKit({
      buffer: tags.image.imageBuffer,
      filename: tags.title + ".jpeg",
      folder: "/cohort-2/moodify/posters",
    }),
  ]);

  const song = await songModel.create({
    title: tags.title,
    url: songFile.url,
    posterUrl: posterFile.url,
    mood,
  });

  res.status(201).json({
    message: "song uploaded successfully",
    song,
  });
}

module.exports = {
  uploadSong,
};
