const express = require("express");

// const {sequelize} = require("sequelize");
const sequelize = require("sequelize");
require("sequelize/lib/model");

let path = require("path");

const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

app.use(express.json());

// Import your routes and other modules
// const authRoute = require('./src/routes');
const { authRoutes, productRoutes, categoryRoutes } = require("./src/routes");
const { getAssociationForAlias } = require("sequelize/lib/associations/mixin");
require("./src/config/db.config");
require("./src/controller/usercontroller");

// Body parser middleware

app.use(express.urlencoded({ extended: false }));

app.use(morgan("combined"));

// Use your authentication routes
app.use(authRoutes);
app.use(productRoutes);
app.use(categoryRoutes);

app.use("/public", express.static(path.join(__dirname, "public")));
// Middleware function for logging
function logging(req, res, next) {
  console.log("Given local middleware is calling");
  next();
}

// Middleware function for '/things' route
app.use("/things", logging, (req, res, next) => {
  console.log(req.body);
  console.log("Given first middleware");
  next();
});

// Middleware function for '/second' route
app.use("/second", (req, res, next) => {
  console.log("Second middleware");
  next();
});

// Define routes
app.get("/", (req, res) => {
  res.json({
    aman: "",
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);
  res.json({
    user: req.body,
  });
});
module.exports = {
  app,
};

// Start the server
app.listen(4000, () => {
  console.log("Server listening on port 4000");
});
