require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/database");

app.listen(process.env.PORT || 3000, () => {
  console.log(`server started at ${process.env.PORT}`);
});


connectToDb();
