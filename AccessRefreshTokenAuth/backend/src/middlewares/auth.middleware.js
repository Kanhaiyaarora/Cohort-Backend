import jwt from "jsonwebtoken";
import userModel from "../models/auth.model.js";

const authMiddleware = async (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({
      message: "Unauthorized. No access token provided.",
    });
  }
  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    const user = await userModel.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        message: "Unauthorized. Invalid access token.",
      });
    }
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized. Invalid access token.",
    });
  }
};

export default authMiddleware;
