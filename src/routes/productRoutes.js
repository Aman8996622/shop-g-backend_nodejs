const express = require("express");
const temp = require("../config/db.config");
const upload = require("../utils/upload");
const app = express();
const setUploadPath = require("../middleware/upload_middleware");
const verifyToken = require("../utils/verify_token");
const {
  addProduct,
  deleteProduct,
} = require("../controller/productcontroller");

const routes = express.Router();

routes.post(
  "/add_product",
  verifyToken.verifyToken,
  setUploadPath.setUploadPath("./public/images"),
  upload.array("productImage"),
  addProduct
);

routes.post(
  "/delete_products",
  verifyToken.verifyToken,

  deleteProduct
);

module.exports = {
  productRoutes: routes,
};
