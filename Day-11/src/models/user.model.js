const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: [true, "user already exists with this email id"],
  },
  password: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
