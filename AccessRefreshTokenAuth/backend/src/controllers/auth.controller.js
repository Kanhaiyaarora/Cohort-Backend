import mongoose from "mongoose";
import userModel from "../models/auth.model.js";
import bcrypt from "bcryptjs";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/generateTokens.js";

export const registerController = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({
      message: "All fields are required.",
    });
  }

  const isUserExist = await userModel.findOne({ email });

  if (isUserExist) {
    return res.status(400).json({
      message: "user already exists with this same email address.",
    });
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hashPassword,
  });

  const refreshToken = generateRefreshToken(user);
  const accessToken = generateAccessToken(user);

  user.refreshToken = refreshToken;
  await user.save();

  res.cookies("accessToken", accessToken,{
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });
  res.cookies("refreshToken", refreshToken,{
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(200).json({
    message: "user registered successfully.",
    user:{
      id: user._id,
      username: user.username,
      email: user.email,
      refreshToken: user.refreshToken,
      accessToken: accessToken,
      password: user.password
    }
  });
};


export const loginController = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      message: "All fields are required.",
    });
  }

  const isUserExist = await userModel.findOne({ email });

  if (!isUserExist) {
    return res.status(404).json({
      message: "user does not exist with this email address.",
    });
  }

  const isMatch = await bcrypt.compare(password, isUserExist.password);

  if (!isMatch) {
    return res.status(400).json({
      message: "Invalid credentials.",
    });
  }

  const refreshToken = generateRefreshToken(isUserExist);
  const accessToken = generateAccessToken(isUserExist);

  isUserExist.refreshToken = refreshToken;
  await isUserExist.save();

  res.cookies("accessToken", accessToken,{
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 15 * 60 * 1000, // 15 minutes
  });
  res.cookies("refreshToken", refreshToken,{
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(200).json({
    message: "user logged in successfully.",
    user:{
      id: isUserExist._id,
      username: isUserExist.username,
      email: isUserExist.email,
      refreshToken: isUserExist.refreshToken,
      accessToken: accessToken,
      password: isUserExist.password
    }
  });
};
