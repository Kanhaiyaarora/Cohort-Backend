const mongoose = require("mongoose");

async function connectToDb() {
  await mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("db connected successfully");
  });
}

module.exports = connectToDb;
