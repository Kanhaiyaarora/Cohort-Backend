const jwt = require("jsonwebtoken");
const blacklistModel = require("../models/blacklist.model");
const redis = require("../config/cache");

async function authUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "token not provided",
    });
  }


  // const isTokenBlacklisted = await blacklistModel.findOne({ token }); instead of using mongodb now we are using redis
  const isTokenBlacklisted = await redis.get(token)


  if (isTokenBlacklisted) {
    return res.status(401).json({
      message: "Token is expired or blacklisted.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "invalid token",
    });
  }
}

module.exports = authUser;
