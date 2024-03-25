const mongoose = require("mongoose");

const DescriptionSchema = new mongoose.Schema({
  product_name: String,
  rating: Number,
});

const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id: Number,
  product_id: String,
  name: String,
  selected_color: String,
  selected_size: String,
  mrp: String,
  price: String,
  off_amount: String,
  discount: String,
  description: DescriptionSchema,
  sub_category_id: Number,
  main_category_id: Number,
  created_at: Date,
  updated_at: Date,
});

const CartProduct = mongoose.model("Cart", ProductSchema);

module.exports = CartProduct;
