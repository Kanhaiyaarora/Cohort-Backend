import { Router } from "express";
import {
  getAccessTokenController,
  getMeController,
  loginController,
  registerController,
} from "../controllers/auth.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const authRouter = Router();

authRouter.post("/register", registerController);

authRouter.post("/login", loginController);

authRouter.get("/me", authMiddleware, getMeController);

authRouter.get("/accessToken", getAccessTokenController);

export default authRouter;
