const mongoose = require("mongoose");

async function connectToDb() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("CONNECTED TO MONGODB SUCCESSFULLY");
}

module.exports = connectToDb;
