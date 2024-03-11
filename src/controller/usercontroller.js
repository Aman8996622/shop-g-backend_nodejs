const User = require("../models/new_db_models/user");

require("dotenv").config();

const jwt = require("jsonwebtoken");

// const bcrpty  = require('/')
const bcrypt = require("bcrypt");

const bodyParser = require("body-parser");

const dbconfig = require("../config/db.config");

async function signUp(req, res) {
  console.log(req.headers);
  console.log("sign Up method is get called");
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const phone_no = req.body.phone_no;
  const file = req.file;
  console.log(file);

  try {
    const checkUserExist = await User.findOne({
      where: {
        email,
      },
    });
    console.log(process.env.SECRET_KEY);

    // console.log(req.file.filename);

    if (!checkUserExist) {
      const crptPassword = await bcrypt.hash(password, 10);
      console.log(crptPassword);

      const userDetials = await User.create({
        name,
        email,
        password: crptPassword,
        phone_no,
        profile: req.file.filename,
      });
      const token = jwt.sign(
        {
          id: userDetials.id,
          email: userDetials.email,
        },
        "shhh",
        {
          expiresIn: "1d",
        }
      );
      res.send({
        name: name,
        email: email,
        token: token,
        status: 1,
        profile_url: `http://localhost:4000/public/images/${req.file.filename}`,
      });
    } else {
      res.send({
        status: 1,
        message: "given user already exist",
      });
    }

    console.log("user created");
  } catch (e) {
    console.log(e);
  }
}

//   login this method is responsible for login

async function login(req, res) {
  console.log(req.headers);

  console.log(req.body);

  try {
    console.log("Given login method is called");
    const password = req.body.password;
    const email = req.body.email;
    const userData = await User.findOne({
      where: {
        email: email,
      },
    });
    if (userData) {
      console.log(userData.toJSON);

      const valid = bcrypt.compareSync(password, userData.password);
      console.log(valid);

      if (!valid) {
        res.send({
          message: "Invalid Password",
        });
      }

      console.log("given condition User exist into db");
      const token = jwt.sign(
        {
          id: userData.id,
          email: userData.email,
        },
        "shhh",
        {
          expiresIn: "7d",
        }
      );
      res.send({
        userData: userData,
        token: token,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  signUp,
  login,
};
