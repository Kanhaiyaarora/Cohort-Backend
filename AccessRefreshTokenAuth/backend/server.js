import { config } from "dotenv";
import app from "./src/app.js";
import { connectToDb } from "./src/config/db.js";
config();
app.listen(3000, () => {
  console.log("server is started on the port 3000");
});

connectToDb();
