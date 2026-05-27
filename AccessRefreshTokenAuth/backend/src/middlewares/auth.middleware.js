import jwt from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
  const accessToken = req.cookies.accessToken;

  if (!accessToken) {
    return res.status(401).json({
      message: "Unauthorized. No access token provided.",
    });
  }
  try {
    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      message: "Unauthorized. Invalid access token.",
    });
  }
};

export default authMiddleware;
