import mongoose from "mongoose";

const ingredientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false,
  },

  quantity: {
    type: Number,
    required: false,
  },

  unit: {
    type: String,
    required: false,
  },

  notes: {
    type: String,
    required: false,
  },
});

const Ingredients = mongoose.model("Ingredient", ingredientSchema);

export default Ingredients;
