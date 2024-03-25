const mongoose = require("mongoose");

const { Schema } = mongoose;

const yourSchema = new Schema({
  id: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    default: "",
  },
  product_id: {
    type: Number,
    default: 0,
  },
  image: {
    type: String,
    default: "",
  },
  sub_category_id: {
    type: Array,
    default: [],
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

yourSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Category = mongoose.model("main_categories", yourSchema);

module.exports = Category;
