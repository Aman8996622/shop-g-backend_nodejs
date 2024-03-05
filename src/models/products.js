// Assuming you have a Sequelize instance created in db.config
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Products = sequelize.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
    },
    description: {
      type: DataTypes.STRING,
      unique: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
    categoryName: {
      type: DataTypes.STRING,
    },
    brandIS: {
      type: DataTypes.INTEGER,
    },
    brandName: {
      type: DataTypes.STRING,
    },

    price: {
      type: DataTypes.DOUBLE,
    },
    brandName: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.DOUBLE,
    },
    isDeleted: {
      type: DataTypes.INTEGER,
    },
     
  },
  {
    tableName: "products",
  }
);
0;

module.exports = Products;
