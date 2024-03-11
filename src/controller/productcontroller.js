const randomNumber = require("../utils/const");

const Product = require("../models/new_db_models/product");

const Images = require("../models/new_db_models/image");

const cache = require("node-cache");

/* ********************/
// ADD PRODUCT
/* ********************/
async function addProduct(req, res) {
  console.log(randomNumber.generateId());
  const productName = req.body.name;
  const productId = randomNumber.generateId();

  const descrip = req.body.description;
  const categoryName = req.body.category;
  const rating = req.body.rating;
  const brand = req.body.brand;
  const mrp = req.body.price;

  let list = req.files;

  const product = await Product.findOne({ where: { name: productName } });
  if (!product) {
    let reqFileList = [];
    for (const tempObject of list) {
      console.log(tempObject);

      reqFileList.push({
        id: productId,
        image_url: `http://localhost:4000/public/images/${tempObject.filename}`,
      });
    }
    console.log(reqFileList);

    const userDetials = await Product.create({
      id: productId,
      name: productName,
      categoryName: categoryName,
      price: mrp,
      rating: rating,
      brandName: brand,
      isDeleted: 0,
    });
    res.send({
      message: "Given product is add successfully",
    });

    await Images.bulkCreate(reqFileList)
      .then((value) => {})
      .catch((e) => {
        console.log(e);
      });
  } else {
  }
}

/* ********************/
//DELETE PRODUCT
/* ********************/
async function deleteProduct(req, res) {
  const productId = req.productId;

  const product = Product.update(
    { isDeleted: 1 },
    {
      where: {
        id: productId,
      },
    }
  );

  if (product) {
    res.send({
      message: "Given  product is deleted",
    });
  } else {
  }
}

/* ********************/
// UPDATE PRODUCT
/* ********************/

async function updateProduct(req, res) {
  const productId = req.productId;

  const product = Product.update(
    { isDeleted: 1 },
    {
      where: {
        id: productId,
      },
    }
  );

  if (product) {
    res.send({
      message: "Given  product is deleted",
    });
  } else {
  }
}


/* ********************/
//
/* ********************/
async function getProduct(req, res) {
  const productId = req.productId;

  const product = Product.update(
    { isDeleted: 1 },
    {
      where: {
        id: productId,
      },
    }
  );

  if (product) {
    res.send({
      message: "Given  product is deleted",
    });
  } else {
  }
}

async function getCategory(req, res) {
  const productId = req.productId;

  const product = Product.update(
    { isDeleted: 1 },
    {
      where: {
        id: productId,
      },
    }
  );

  if (product) {
    res.send({
      message: "Given  product is deleted",
    });
  } else {
  }
}

module.exports = {
  addProduct,
  deleteProduct,
};
