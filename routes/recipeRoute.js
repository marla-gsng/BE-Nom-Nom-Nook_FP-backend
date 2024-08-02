import { Router } from "express";
import {
  getAllRecipes,
  createRecipe,
  getRecipeById,
  getRecipeByTitle,
} from "../controller/recipeController.js";

const recipeRouter = Router();

recipeRouter.get("/recipes", getAllRecipes);

recipeRouter.get("/recipe/:id", getRecipeById);

recipeRouter.get("/recipe/:title", getRecipeByTitle);

recipeRouter.post("/recipes", createRecipe);

export default recipeRouter;
