
const jwt = require('jsonwebtoken')

const isAuth = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not found" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.id = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }


}
module.exports = isAuth;
