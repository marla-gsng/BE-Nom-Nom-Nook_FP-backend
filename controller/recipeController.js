// Call the API to get the recipe details

import mongoose from "mongoose";
import Recipe from "../models/recipeModel.js";

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipe.find();
    if (categories.length < 1) {
      return res.status(404).json({ error: "No recipe found" });
    }
    const recipeCount = await Recipe.countDocuments();
    res.set("Content-Range", `recipes 0-${recipes.length}/${recipeCount}`);
    return res.status(200).json(categories);
  } catch (err) {
    console.error("Internal server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

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

// const { title } = req.params;
// // const searchByTitle = await Movie.findOne({ title: title })
// const searchByTitle = await Movie.findOne({
//   title: { $regex: new RegExp(title, "i") },
// }); // case insensitive
// return res.json(searchByTitle);

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

export {
  getRecipes,
  getAllRecipes,
  createRecipe,
  getRecipeById,
  getRecipeByTitle,
};
