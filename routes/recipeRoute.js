import { Router } from "express";
import { getAllRecipes, createRecipe } from "../controller/recipeController.js";

const recipeRouter = Router();

recipeRouter.get("/recipes", getAllRecipes);

recipeRouter.post("/recipes", createRecipe);

export default recipeRouter;
