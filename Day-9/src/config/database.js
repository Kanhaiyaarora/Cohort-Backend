const mongoose = require("mongoose");

function connectToDb() {
  try {
    mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("MongoDb connected successfully");
    });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connectToDb;
