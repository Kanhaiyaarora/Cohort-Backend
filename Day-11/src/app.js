const express = require("express");
const authRouter = require("./routes/authRoutes");
const CookieParser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use("/api/auth", authRouter);
app.use(CookieParser());
module.exports = app;
