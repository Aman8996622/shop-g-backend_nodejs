const express = require("express");
const temp = require("../config/db.config");
const upload = require("../utils/upload");
const app = express();
const setUploadPath = require("../middleware/upload_middleware");
const verifyToken = require("../utils/verify_token");
const {
  addMainCategory,
  addSubCategory,
  deleteCategory,
  getCategory,
} = require("../controller/categorycontroller");

const routes = express.Router();

// routes.post(
//   "/add_maincategory",
//   verifyToken.verifyToken,
//   setUploadPath.setUploadPath("./public/images/categories"),
//   upload.single("CategoryImage"),
//   setUploadPath.setUploadPath("./public/images/sub_categories"),
//   upload.single("subCategoryImage"),
//   addMainCategory
// );
routes.post(
  "/add_maincategory",
  verifyToken.verifyToken,
  setUploadPath.setUploadPath("./public/images/categories"),
  setUploadPath.setUploadPath("./public/images/sub_categories"),
  upload.fields([
    { name: "CategoryImage", maxCount: 1 }, // Assuming you want to handle one file for "CategoryImage"
    { name: "subCategoryImage",}, // Assuming you want to handle one file for "subCategoryImage"
  ]),
  addMainCategory
);

routes.post("/delete_products", verifyToken.verifyToken, deleteCategory);

module.exports = {
  categoryRoutes: routes,
};