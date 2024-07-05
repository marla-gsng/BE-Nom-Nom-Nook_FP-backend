import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true],
  },

  quantity: {
    type: Number,
    required: [true],
  },

  unit: {
    type: String,
    required: [true],
  },
});

const Ingredients = mongoose.model("Ingredient", ingredientSchema);

export default Ingredients;
