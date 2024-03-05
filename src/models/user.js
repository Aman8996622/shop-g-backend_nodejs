// Assuming you have a Sequelize instance created in db.config
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const User = sequelize.define(
  "user_details",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    phone_no: {
      type: DataTypes.STRING,
    },
    company_id: {
      type: DataTypes.INTEGER,
    },
    profile: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "user_details",
  }
);
0;

module.exports = User;
