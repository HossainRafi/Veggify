const express = require("express");
const router = express.Router();
const ItemController = require("../controllers/itemController");

router.get("/", ItemController.getAllItems);

module.exports = router;
