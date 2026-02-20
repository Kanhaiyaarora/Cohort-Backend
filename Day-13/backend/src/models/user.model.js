const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "this username already exists"],
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: [true, "this email already exists"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default: "https://ik.imagekit.io/kanhaiya/download.jfif",
  },
});


const userModel = mongoose.model("users", userSchema);

module.exports = userModel;
