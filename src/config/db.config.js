//
// require("../models/user");
const { Sequelize, DataTypes } = require("sequelize");

// const sequelize = new Sequelize("temp_db", "root", "", {
//   host: "localhost",

//   dialect: "mysql",
//   define: {
//     timestamps: false, // Disable timestamps
//   },
// });
// try {
//   sequelize
//     .authenticate()
//     .then(() => {
//       console.log("Connection has been established successFully");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// } catch (error) {
//   console.error("unable to connect to the db", error);
// }

const { connect } = require("mongoose");
require("dotenv").config();

// wiwPgSyHdaSHsg9a
module.exports = async () => {
  try {
    const dbUrl =
      "mongodb+srv://flaman241:wiwPgSyHdaSHsg9a@cluster0.h5bhxum.mongodb.net/shopzdb?retryWrites=true&w=majority&appName=Cluster0";
    await connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("give db is connected");
  } catch (error) {
    console.log("database not connected", error);
  }
};
