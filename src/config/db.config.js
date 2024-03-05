const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("temp_db", "root", "", {
  host: "localhost",

  dialect: "mysql",
  define: {
    timestamps: false, // Disable timestamps
  },
});
try {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successFully");
    })
    .catch((err) => {
      console.log(err);
    });
} catch (error) {
  console.error("unable to connect to the db", error);
}

// require("../models/user");

module.exports = sequelize;
