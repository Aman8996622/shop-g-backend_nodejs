// Assuming you have a Sequelize instance created in db.config
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

// https://static-admin-dashboard-example.netlify.app/?
const SubCategories = sequelize.define(
  "sub_categories",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      unique: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
    },
    product_id: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.TEXT,
    },
    is_deleted: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "sub_categories",
  }
);
0;

module.exports = SubCategories;
