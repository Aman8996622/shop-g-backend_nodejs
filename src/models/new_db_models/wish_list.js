const mongoose = require("mongoose");
const { Schema } = mongoose;

const yourModelSchema = new Schema({
  product_id: {
    type: Number,
    default: "",
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

const WishList = mongoose.model("wish_list", yourModelSchema);

module.exports = WishList;
