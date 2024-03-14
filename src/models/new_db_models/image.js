// import mongoose, { Types, model } from "mongoose";

const mongoose = require("mongoose");

const { Schema } = mongoose;

const yourSchema = new Schema({
  id: {
    type: Number,
    default: 0,
  },
  images_url: {
    type: String,
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

yourSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const Image = mongoose.model("images", yourSchema);

module.exports = Image;
