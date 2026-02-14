const { toFile } = require("@imagekit/nodejs");
const imageKit = require("@imagekit/nodejs");
const postModel = require("../models/post.model");
const jwt = require("jsonwebtoken");

const imagekit = new imageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  const token = req.cookies.token;
  if (!token) {
    return res
      .status(401)
      .json({ message: "Token not found. Unauthorised access" });
  }

  let decode = null;
  try {
    decode = jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return res
      .status(401)
      .json({ message: "token not valid - unauthorised access" });
  }

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "insta-clone-post",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imageUrl: file.url,
    user: decode.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });
}

module.exports = { createPostController };
