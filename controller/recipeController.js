// Call the API to get the recipe details

import mongoose from "mongoose";
import Recipe from "../models/recipeModel.js";

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export default getAllRecipes;
