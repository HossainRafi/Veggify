const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/itemController");

router.get("/all-items", ItemController.getAllItems);
router.get("/items", ItemController.getSearchedItems);

module.exports = router;
