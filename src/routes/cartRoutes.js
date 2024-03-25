const express = require("express");
const temp = require("../config/db.config");

const upload = require("../utils/upload");

const verifyToken = require("../utils/verify_token");

const app = express();

const setUploadPath = require("../middleware/upload_middleware");

const routes = express.Router();
// const add = require("../controller/cartcontroller");
// import addtoCart from "../controller/cartcontroller";
const {addToCart}  = require("../controller/cartcontroller");


routes.post("/cart", verifyToken.verifyToken,addToCart);

module.exports = {
  cartRoutes: routes,
};
