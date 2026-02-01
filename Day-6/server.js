//  kanhaiyaarora75_db_user       YbFTFbdxmiyXzDU2

require("dotenv").config();
const app = require("./src/app");
const connectToDb = require("./src/config/database");

connectToDb();
app.listen(3000, () => {
  console.log("server started");
});
