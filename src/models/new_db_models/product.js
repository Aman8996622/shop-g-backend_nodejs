const mongoose = require("mongoose");

const { Schema } = mongoose;

const yourModelSchema = new Schema({
  
  id: {
    type: String,
    default: "",
  },
  name: {
    type: String, 
    unique: true,
    default: "", 
  },
  description: {
    type: String,
    unique:true,
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
    type: Array,
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

yourModelSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Product = mongoose.model("product_id", yourModelSchema);

module.exports = Product;
