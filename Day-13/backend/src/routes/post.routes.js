const express = require("express");
const {
  createPostController,
  getPostController,
  getPostDetailsController,
  likePostController,
  getFeedController,
} = require("../controllers/post.controller");

const postRouter = express.Router();
const multer = require("multer");
const identifyUser = require("../middlewares/auth.middleware");
const upload = multer({ storage: multer.memoryStorage() });

postRouter.post("/",identifyUser, upload.single("image"),createPostController); // Create Post

postRouter.get("/", identifyUser, getPostController); // fetch user post

postRouter.get("/details/:id", identifyUser, getPostDetailsController); //fetch post details

postRouter.post("/like/:postId", identifyUser, likePostController); // like post

postRouter.get("/feed", identifyUser, getFeedController); // fetch feed 

module.exports = postRouter;
