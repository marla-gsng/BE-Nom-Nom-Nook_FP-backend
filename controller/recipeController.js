// Call the API to get the recipe details

import mongoose from "mongoose";
import Recipe from "../models/recipeModel.js";

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("ingredients instructions");
    return res.status(200).json(recipes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getRecipeById = async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await Recipe.findById(id).populate(
      "ingredients instructions"
    );
    return res.status(200).json(recipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const createRecipe = async (req, res) => {
  const recipe = req.body;
  const newRecipe = new Recipe(recipe);
  try {
    await newRecipe.save();
    return res.status(201).json(newRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export { getAllRecipes, createRecipe, getRecipeById };
