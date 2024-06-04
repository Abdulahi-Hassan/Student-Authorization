const express = require("express");
const {Upload} =require( '../config/Database')
const router = express.Router();
const {
  Change,
  Login,
  SignUp,
  Logout,
} = require("../controllers/User-Authorization");
router
  .post("/signup",Upload, SignUp)
  .post("/login", Login)
  .post("/logout", Logout)
  .post("/change", Change);
module.exports = router;
