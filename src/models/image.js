// Assuming you have a Sequelize instance created in db.config
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Images = sequelize.define(
  "images",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    image_url: {
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    tableName: "images",
  }
);
0;

module.exports = Images;
