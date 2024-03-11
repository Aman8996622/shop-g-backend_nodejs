const mongoose = require("mongoose");
const { Schema } = mongoose;

const yourModelSchema = new Schema({
  
  id: {
    type: String,
    default: "",
  },
  product_id: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    default: "",
  },
  main_category_id: {
    type: Number,
    default: 0,
  },
  updated_at: {
    type: Date,
    default: () => Date.now(),
  },
  created_at: {
    type: Date,
    default: () => Date.now(),
  },
  image: {
    type: String,
    default: "",
  },
});

const SubCategory = mongoose.model("YourModel", yourModelSchema);

module.exports = SubCategory;
