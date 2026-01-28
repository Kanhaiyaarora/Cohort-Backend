// 1. server ko start krna 2. db se connect krna
const mongoose = require("mongoose");

const app = require("./src/app");

app.listen(3000, () => {
  console.log("server started successfully");
});

app.get("/", (req, res) => {
  res.send("Home Page");
});

function connectToDb() {
  mongoose
    .connect(
      "mongodb+srv://kanhaiyaarora75_db_user:ggZH3d3vGpAlk2iJ@cluster0.yiwxlim.mongodb.net/day-5",
    )
    .then(() => {
      console.log("db connected successfully");
    });
}

connectToDb();
