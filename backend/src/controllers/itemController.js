const Item= require("../model/ItemModel")

// get all items
const getAllItems=async (req, res)=>{
const result = await Item.find().sort({createAt: -1})
res.status(200).json(result)
}

// exports
module.exports={
  getAllItems
}