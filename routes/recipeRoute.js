import { Router } from "express";
import getAllRecipes from "../controller/recipeController.js";

const recipeRouter = Router();

recipeRouter.get("/recipes", getAllRecipes);

export default recipeRouter;
