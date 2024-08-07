import { Router } from "express";
import {
  getAllRecipes,
  createRecipe,
  getRecipeById,
  getRecipeByTitle,
} from "../controller/recipeController.js";
import Recipe from "../models/recipeModel.js";

const recipeRouter = Router();

recipeRouter.get("/recipes", getAllRecipes);

recipeRouter.get("/recipe/:id", getRecipeById);

recipeRouter.get("/recipe/title/:title", async (req, res) => {
  const { title } = req.params;
  const searchByTitle = await Recipe.findOne({
    title: { $regex: new RegExp(title, "i") },
  }); // case insensitive
  return res.json(searchByTitle);
});

recipeRouter.post("/recipes", createRecipe);

export default recipeRouter;
