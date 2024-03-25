const mongoose = require("mongoose");
const { Schema } = mongoose;

const usersSchema = new Schema({
  id: {
    type: Number,
    default: 0,
  },
  name: {
    type: String,
    default: "",
  },
  isAdmin: {
    type: Number,
    default: 0,
  },
  email: {
    type: String,
    default: "",
  },
  password: {
    type: String,
    default: "",
  },
  phone_no: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  profile: {
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

usersSchema.pre("save", function (next) {
  this.updated_at = Date.now();
  next();
});

const User = mongoose.model("users", usersSchema);

module.exports = User;
