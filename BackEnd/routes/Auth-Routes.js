const express = require("express");
const router = express.Router();
const {
  Change,
  Login,
  SignUp,
  Logout,
} = require("../controllers/User-Authorization");
router
  .post("/signup", SignUp)
  .post("/login", Login)
  .post("/logout", Logout)
  .post("/change", Change);
module.exports = router;
