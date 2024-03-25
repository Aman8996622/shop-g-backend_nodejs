const randomNumber = require("../utils/const");

const Category = require("../models/new_db_models/main_category");

const SubCategories = require("../models/new_db_models/sub_category");

const CartProduct = require("../models/new_db_models/cart");

const Images = require("../models/new_db_models/image");

const cache = require("node-cache");
const { json } = require("sequelize");
const { indexOf } = require("lodash");

async function addToCart(req, res) {
  console.log(randomNumber.generateId());

  const productName = req.body.name;
  const productId = req.body.productId;
  const cartId = randomNumber.generateId();
  const descrip = req.body.description;

  const selectColor = req.body.selectedColor;
  const selectSize = req.body.selectSize;

  const rating = req.body.rating;
  const brand = req.body.brand;
  const mrp = req.body.price;
  const subCategoriesId = req.body.sub_category_id;
  const main_category_id = req.body.main_category_id;
  let list = req.files;

  try {
    const product = await CartProduct.findOne({ name: productId });
    if (!product) {
      CartProduct.create({
        name: productName, 
      
      });
       


 


    } else {
    }
  } catch (error) {
    console.log(error);
  }
}
module.exports = {
  addToCart,
};
