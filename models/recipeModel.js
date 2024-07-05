import mongoose, { Schema } from "mongoose";

const recipeSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true],
  },

  description: {
    type: String,
    required: [true],
  },

  ingredients: [
    {
      ingredient: {
        type: Schema.Types.ObjectId,
        ref: "ingredient",
        required: [true],
      },
      quantity: {
        type: Number,
        required: [true],
      },
    },
  ],

  steps: {
    type: Schema.Types.ObjectId,
    ref: "steps",
    required: [true],
  },

  prep_time: {
    type: Number,
    required: [true],
  },

  cook_time: {
    type: Number,
    required: [true],
  },

  total_time: {
    type: Number,
    required: [true],
  },

  servings: {
    type: Number,
    required: [true],
  },

  tags: {
    type: Array,
    default: [],
  },

  category: {
    type: String,
    required: [true],
  },

  image: {
    type: String,
    required: [true],
  },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;
