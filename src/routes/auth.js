const express = require("express");
const temp = require("../config/db.config");

const upload = require("../utils/upload");

const app = express();

const setUploadPath = require("../middleware/upload_middleware");

const routes = express.Router();

const {signUp, login} = require("../controller/usercontroller");

routes.post(
  "/signUp",
  setUploadPath.setUploadPath("./public/images"),
  upload.single("profileImage"),
  signUp
);

routes.post("/login", login);

module.exports = {
  authRoutes: routes,
};
