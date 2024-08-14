import mongoose from "mongoose";
import Ingredients from "../models/ingredientsModel.js";

const getIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredients.find();
    if (ingredients.length < 1) {
      return res.status(404).json({ error: "No ingredients found" });
    }
    const ingredientsCount = await Ingredients.countDocuments();
    res.set(
      "Content-Range",
      `ingredients 0-${ingredients.length}/${ingredientsCount}`
    );
    return res.status(200).json(ingredients);
  } catch (err) {
    console.error("Internal server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

// const getAllIngredients = async (req, res) => {
//   try {
//     const ingredients = await Ingredients.find();
//     res.status(200).json(ingredients);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

const getIngredientById = async (req, res) => {
  const { ingredientID } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(ingredientID)) {
      return res.status(400).json({ error: "Invalid ingredient ID format" });
    }
    const ingredient = await Ingredients.findById(ingredientID);
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
  const { name, quantity, unit, notes } = req.body;

  try {
    const newIngredient = await Ingredients.create({
      name,
      quantity,
      unit,
      notes,
    });
    return res.status(201).json(newIngredient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export {
  getIngredients,
  // getAllIngredients,
  getIngredientById,
  getIngredientsByName,
  createIngredient,
};
