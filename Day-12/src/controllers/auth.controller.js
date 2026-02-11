const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { username, email, password, bio, profileImage } = req.body;

  const isUserAlreadyExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserAlreadyExists) {
    return res.status(409).json({
      message:
        "user already exists" +
        (isUserAlreadyExists.email == email
          ? "Email already exits"
          : "username already exists"),
    });
  }

  const hashPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
  const user = await userModel.create({
    username,
    email,
    password: hashPassword,
    bio,
    profileImage,
  });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("jwt_token", token);

  res.status(201).json({
    message: "user registered successfully",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

async function loginController(req, res) {
  const { username, email, password } = req.body;
  const user = await userModel.findOne({ $or: [{ username }, { email }] });
  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }
  const hashedPassword = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  const isPasswordValid = user.password == hashedPassword;
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Password Invalid",
    });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1d",
  });
  res.cookie("jwt_token", token);
  res.status(200).json({
    message: "user logged in successfully ",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

module.exports = { registerController, loginController };
