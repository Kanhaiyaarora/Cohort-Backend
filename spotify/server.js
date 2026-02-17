require("dotenv").config();
const connectToDb = require("./config/database");
const app = require("./src/app");

app.listen(3000, () => {
  console.log("server started at port 3000");
});

connectToDb();
