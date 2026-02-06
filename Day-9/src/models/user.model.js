const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: [
      true,
      "user account is present with same email id. Please try with different email id",
    ],
  },
  password: String,
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
