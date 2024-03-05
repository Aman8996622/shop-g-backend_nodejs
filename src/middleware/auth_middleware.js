const jwt = require("jsonwebtoken");

require("dotenv").config();

async function checkToken(req, res, next) {
  console.log(req.headers);
}

module.exports = {
  checkToken,
};
