const randomNumber = require("../utils/const");

const Category = require("../models/category");

const SubCategories = require("../models/sub_category");

const Images = require("../models/image");

const cache = require("node-cache");
const { json } = require("sequelize");
const { indexOf } = require("lodash");

async function addMainCategory(req, res) {
  console.log(randomNumber.generateId());
  const categoryName = req.body.name;
  const categoryId = randomNumber.generateId();
  const description = req.description;

  const subCategories = JSON.parse(req.body.json);

  const imageFile = req.files.CategoryImage;

  // const firstObject  = imageFile[0];

  try {
    const category = await Category.findOne({ where: { name: categoryName } });
    if (!category) {
      const userDetials = await Category.create({
        id: categoryId,

        name: categoryName,
        description: description,
        isDeleted: 0,
      });

      res.send({
        mainCategoryId: categoryId,
        message: "Given category is add successfully",
      });

      await Images.create({
        id: categoryId,
        image_url: `http://localhost:4000/public/images/${imageFile[0].filename}`,
      });

      // await addSubCategory(req.body, subCategories, categoryId, req.files.subCategoryImage);
      await addSubCategory({
        body: req.body,
        subCategories: subCategories,
        mainCategoryId: categoryId,
        files: req.files.subCategoryImage,
      });
    } else {
      res.send({
        message: "give data is already exist please ",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

/* ********************/
// Add Sub category
/* ********************/

async function addSubCategory(
  // body,
  // subCategories, mainCategoryId, files,
  { body, subCategories, mainCategoryId, files }
) {
  try {
    const ImageFiles = files;
    let reqFileList = [];

    const listCategories = subCategories.category;

    for (var item of listCategories) {
      const index = listCategories.indexOf(item);

      const subCategoriesId = randomNumber.generateId();

      const category = await SubCategories.findOne({
        where: { name: item.name },
      });
      if (!category) {
        const userDetials = await SubCategories.create({
          id: subCategoriesId,
          name: item.name,
          mainCategoryId: mainCategoryId,
          description: item.description,
          isDeleted: 0,
        });

        if (index < reqFileList.length)
          reqFileList.push({
            id: subCategoriesId,
            image_url: `http://localhost:4000/public/images/${ImageFiles[index].filename}`,
          });
      } else {
        console.log("given sub Categories is present in data");
      }
    }

    await Images.bulkCreate(reqFileList)
      .then((value) => {
        console.log(value);
        
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {
    console.log(e);
  }
}

async function deleteCategory(req, res) {
  const categoryId = req.categoryId;

  try {
    const product = Category.update(
      { isDeleted: 1 },
      {
        where: {
          id: categoryId,
        },
      }
    );

    if (product) {
      res.send({
        message: "Given  category  is deleted",
      });
    } else {
    }
  } catch (error) {}
}

async function getCategory(req, res) {
  const categoryId = req.categoryId;

  const category = Category.findAll();

  try {
    if (product) {
      res.send({
        category: category,
        status: 1,
        message: "All the deleted",
      });
    } else {
    }
  } catch (error) {}
}

module.exports = {
  addMainCategory,
  deleteCategory,
  addSubCategory,
  getCategory,
};
