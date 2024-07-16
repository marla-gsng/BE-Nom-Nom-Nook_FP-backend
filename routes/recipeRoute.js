import { Router } from "express";
import {
  getAllRecipes,
  createRecipe,
  getRecipeById,
} from "../controller/recipeController.js";

const recipeRouter = Router();

recipeRouter.get("/recipes", getAllRecipes);

recipeRouter.get("/recipe/:id", getRecipeById);

recipeRouter.post("/recipes", createRecipe);

export default recipeRouter;
