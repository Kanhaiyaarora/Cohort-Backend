const { toFile } = require("@imagekit/nodejs");
const imageKit = require("@imagekit/nodejs");
const postModel = require("../models/post.model");
const jwt = require("jsonwebtoken");
const likeModel = require("../models/like.model");

const imagekit = new imageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "insta-clone-post",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imageUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "Post created successfully",
    post,
  });
}

async function getPostController(req, res) {
  const userId = req.user.id;

  const posts = await postModel.find({ user: userId });

  res.status(200).json({
    message: "posts fetched successfully",
    posts,
  });
}

async function getPostDetailsController(req, res) {
  const userId = req.user.id;
  let postId = req.params.id;

  let post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      message: "Post not found",
    });
  }

  const isValidUser = post.user == userId;
  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbidden content.",
    });
  }

  res.status(200).json({
    message: "Post fetched successfully.",
    post,
  });
}

async function likePostController(req, res) {
  const postId = req.params.postId;
  const username = req.user.username;

  const post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "Post not found.",
    });
  }

  const isAlreadyLiked = await likeModel.findOne({
    post: postId,
    user: username,
  });
  if(isAlreadyLiked){
    return res.status(200).json({
      message: "You already liked this post."
    })
  }

  const like = await likeModel.create({
    post: postId,
    user: username,
  });

  res.status(200).json({
    message: "Post liked successfully",
    like,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
};
