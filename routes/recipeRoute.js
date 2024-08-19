import { Router } from "express";
import {
  getRecipes,
  // getAllRecipes,
  createRecipe,
  updateRecipe,
  getRecipeById,
  getRecipeByTitle,
  deleteRecipes,
} from "../controller/recipeController.js";
import Recipe from "../models/recipeModel.js";

const recipeRouter = Router();

recipeRouter.get("/recipes", getRecipes);

// recipeRouter.get("/recipes", getAllRecipes);

recipeRouter.get("/recipes/:recipeId", getRecipeById);

recipeRouter.get("/recipe/title/:title", async (req, res) => {
  const { title } = req.params;
  const searchByTitle = await Recipe.findOne({
    title: { $regex: new RegExp(title, "i") },
  }); // case insensitive
  return res.json(searchByTitle);
});

recipeRouter.post("/recipes", createRecipe);

recipeRouter.put("/recipes/:recipeId", updateRecipe);

recipeRouter.delete("/recipes/:recipeId", deleteRecipes);

export default recipeRouter;
