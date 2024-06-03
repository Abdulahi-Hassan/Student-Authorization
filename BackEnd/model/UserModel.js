const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Profile: {
    type: String,
    reqiured: true,
  },
  Confirm: {
    type: String,
    required: false,
  },
  Gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  Role: {
    type: String,
    required: false,
    default: false,
  },
 
  Status: {
    type: String,
    required: false,
    default: "active",
    enum: ["active", "inactive", "disabled"],
  },
});

const UserModel = model("user", UserSchema);

module.exports = UserModel;
