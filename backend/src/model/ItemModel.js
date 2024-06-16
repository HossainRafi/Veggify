const mongoose = require("mongoose");
const { Schema } = mongoose;

// ingredient details
const ingredientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

// comment details
const commentSchema = new Schema({
  user: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

// more details
const moreSchema = new Schema({
  prep_time: {
    type: String,
    required: true,
  },
  cooking_time: {
    type: String,
    required: true,
  },
  servings: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
});
