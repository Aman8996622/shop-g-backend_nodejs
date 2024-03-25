const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  id: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  mrp: {
    type: String,
    default: "",
  },
  price: {
    type: String,
    default: "",
  },
  discount: {
    type: String,
    default: "",
  },
  rating: {
    type: Number,
    default: 1,
  },
  images: {
    type: [String],
    default: [],
  },
  sub_category_id: {
    type: Number,
    default: 0,
  },
  main_category_id: {
    type: Number,
    default: 0,
  },
  created_at: {
    type: Date,
    default: () => Date.now(),
  },
  updated_at: {
    type: Date,
    default: () => Date.now(),
  },
});

ProductSchema.pre("save", function (next) {
  this.updated_at = new Date();
  next();
});

const WishList = mongoose.model("Product", ProductSchema);

module.exports = WishList;
