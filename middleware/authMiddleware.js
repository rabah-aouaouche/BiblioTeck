const jwt = require("jsonwebtoken");

const protectUser = (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split[" "][1];

  // check json web token exists and is verified.
  if (token) {
    const { _id, role } = jwt.verify(token, "rabahaou secret");
    req.user = { _id, role };
    next();
  } else {
    res.status(400).json("error: You are not authorized!!");
  }
};

const protectAdmin = (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  const token = authHeader && authHeader.split[" "][1];

  // check json web token exists and is verified.
  if (token) {
    const { _id, role } = jwt.verify(token, "rabahaou secret");
    if (role !== "admin") {
      res.status(403).json("error: You are not an admin!!");
    }
    req.user = { _id, role };
    next();
  } else {
    res.status(400).json("error: You are not authorized!!");
  }
};

module.exports = { protectUser, protectAdmin };
