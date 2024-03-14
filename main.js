const express = require("express");

// const {sequelize} = require("sequelize");

const dbConnection = require("./src/config/db.config");

let path = require("path");

const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

const name = "Alice";
const age = 30;


app.use(express.json());

(async function () {
  await dbConnection();
})();
// Import your routes and other modules
// const authRoute = require('./src/routes');
const { authRoutes, productRoutes, categoryRoutes } = require("./src/routes");
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
    message: "",
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
