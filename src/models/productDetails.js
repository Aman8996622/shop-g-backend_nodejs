// Assuming you have a Sequelize instance created in db.config
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

// https://static-admin-dashboard-example.netlify.app/?
const ProductDetails = sequelize.define(
  "product_details",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    description: {
      type: DataTypes.TEXT,
    },
    product_id: {
      type: DataTypes.INTEGER,
    },
  },
  {
    tableName: "product_details",
  }
);

module.exports =  ProductDetails;
