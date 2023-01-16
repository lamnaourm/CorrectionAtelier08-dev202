const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    firstname: { type: String, minLength: 5 },
    lastname: { type: String, minLength: 5 },
    password: String,
  },
  { collection: "users" }
);

module.exports = mongoose.model("users", UserSchema, "users");
