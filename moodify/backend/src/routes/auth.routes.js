const express = require("express");
const {
  registerUser,
  loginUser,
  getMe,
  logoutUser,
} = require("../controllers/auth.controller");

const authUser = require("../middlewares/auth.middleware");

const authRouter = express.Router();

authRouter.post("/register", registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/get-me", authUser, getMe);
authRouter.get("/logout", logoutUser);

module.exports = authRouter;
