const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    maker: { type: String, required: true },
    model: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
