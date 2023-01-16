const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const ProduitSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    detail: String,
    price: Number,
    info: String,
    image: String,
  },
  { collection: "prods" }
);

module.exports = mongoose.model("prods", ProduitSchema, "prods");
