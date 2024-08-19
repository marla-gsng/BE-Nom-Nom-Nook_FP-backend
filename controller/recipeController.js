// Call the API to get the recipe details

import mongoose from "mongoose";
import Recipe from "../models/recipeModel.js";

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find().populate("ingredients instructions");
    if (recipes.length < 1) {
      return res.status(404).json({ error: "No recipe found" });
    }
    const recipeCount = await Recipe.countDocuments();
    res.set("Content-Range", `recipes 0-${recipes.length}/${recipeCount}`);
    return res.status(200).json(recipes);
  } catch (err) {
    console.error("Internal server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

// const getAllRecipes = async (req, res) => {
//   try {
//     const recipes = await Recipe.find().populate("ingredients instructions");
//     return res.status(200).json(recipes);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

const getRecipeById = async (req, res) => {
  const { recipeId } = req.params;
  try {
    const recipe = await Recipe.findById(recipeId).populate(
      "ingredients instructions"
    );
    return res.status(200).json(recipe);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getRecipeByTitle = async (req, res) => {
  const { title } = req.params;
  try {
    const recipe = await Recipe.findOne({ title: title }).populate(
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

const updateRecipe = async (req, res) => {
  const { recipeId } = req.params;
  const recipe = req.body;
  console.log(recipe);
  try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(recipeId, recipe, {
      new: true,
    });
    return res.status(200).json(updatedRecipe);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const deleteRecipes = async (req, res) => {
  const { recipeId } = req.params;
  console.log(recipeId);
  try {
    const recipe = await Recipe.findByIdAndDelete(recipeId);
    if (!recipe) {
      return res.status(404).json({ error: "Recipe not found" });
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export {
  getRecipes,
  // getAllRecipes,
  createRecipe,
  updateRecipe,
  getRecipeById,
  getRecipeByTitle,
  deleteRecipes,
};
