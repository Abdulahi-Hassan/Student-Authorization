let jwt = require("jsonwebtoken");
require("dotenv").config();
exports.VerifyToken = (req, res, next) => {
  let cookies = req.headers.cookie && req.headers.cookie.split("=")[1];
  if (!cookies) return res.send("Cookie not found");
  jwt.verify(cookies, process.env.token, (err, user) => {
    if (err) return res.send( "Invalid token" );
    req.user = user;
    next();
  });
};
