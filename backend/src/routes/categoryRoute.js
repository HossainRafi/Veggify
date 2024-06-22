const express = require("express");
const Category = require("../model/categoryModel");
const router = express.Router();

const CategoryController = require("../controllers/categoryController");

router.get("/categories/:category", CategoryController.getCategory);

module.exports = router;
