const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const UserSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    first_name: { type: String, minLength: 5 },
    last_name: { type: String, minLength: 5 },
    password: String,
  },
  { collection: "users" }
);

module.exports = mongoose.model("users", UserSchema, "users");
