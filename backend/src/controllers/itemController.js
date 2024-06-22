const Item = require("../model/ItemModel");

// get all items
const getAllItems = async (req, res) => {
  const result = await Item.find().sort({ createAt: -1 });
  res.status(200).json(result);
};

// get searched items
const getSearchedItems = async (req, res) => {
  const { q } = req.query;
  try {
    let items;
    if (q) {
      items = await Item.find({ name: { $regex: q, $options: "i" } });
    }
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "No items found !" });
  }
};

// exports
module.exports = {
  getAllItems,
  getSearchedItems,
};
