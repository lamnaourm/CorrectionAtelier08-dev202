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
  { collection: "produits" }
);

module.exports = mongoose.model("produits", ProduitSchema, "produits");
