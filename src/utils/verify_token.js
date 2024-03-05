//
const jwt = require("jsonwebtoken");

async function verifyToken(req, res, next) {
  if (req.headers.hasOwnProperty("authorization")) {
    var token = req.headers.authorization.split(" ");
    //  console.log(token);
    token = token[1];
    const isCheck = jwt.verify(token, "shhh");
    if (isCheck) {
      next();
    }
  } else {
    res.send({
      message: "invalid token",
    });
  }
}

module.exports = {
  verifyToken,
};
