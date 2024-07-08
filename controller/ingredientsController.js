import mongoose from "mongoose";
import Ingredients from "../models/ingredientsModel.js";

const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredients.find();
    res.status(200).json(ingredients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getIngredientById = async (req, res) => {
  const { ingredientID } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(ingredientID)) {
      return res.status(400).json({ error: "Invalid ingredient ID format" });
    }
    const ingredient = await ProductModel.findById(ingredientID);
    if (!ingredient) {
      return res.status(404).json({ error: "Ingredient not found" });
    }
    return res.status(200).json(ingredient);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getIngredientsByName = async (req, res) => {
  const { name } = req.query;
  try {
    const ingredients = await Ingredients.findOne({ name });
    if (!ingredients) {
      return res.status(404).json({ error: "Ingredient not found" });
    }
    return res.status(200).json(ingredients);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createIngredient = async (req, res) => {
  const { name, quantity, unit } = req.body;

  try {
    const newIngredient = await Ingredients.create({ name, quantity, unit });
    return res.status(201).json(newIngredient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  getAllIngredients,
  getIngredientById,
  getIngredientsByName,
  createIngredient,
};
