const express = require("express");
const {
  registerController,
  loginController,
  getmeController,
} = require("../controllers/auth.controller");
const identifyUser = require("../middlewares/auth.middleware");
const authRouter = express.Router();

// POST /api/auth/register
authRouter.post("/register", registerController);

// POST /api/auth/login
authRouter.post("/login", loginController);

// @Route -> method: GET ->   /api/auth/get-me
// desc : fetch the currently logged in user info.
// @access -> Private
authRouter.get("/get-me", identifyUser, getmeController);

module.exports = authRouter;
