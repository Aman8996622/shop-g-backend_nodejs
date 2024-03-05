// Assuming you have a Sequelize instance created in db.config
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

// https://static-admin-dashboard-example.netlify.app/?
const Category = sequelize.define(
  "product_categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.TEXT,
    },
    description: {
      type: DataTypes.TEXT,
      primaryKey: true,
    },
    is_deleted: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "product_categories",
  }
);

module.exports = Category;
