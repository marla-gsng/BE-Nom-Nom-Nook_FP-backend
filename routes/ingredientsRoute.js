import { Router } from "express";
import {
  getAllIngredients,
  getIngredientById,
  getIngredientsByName,
  createIngredient,
} from "../controller/ingredientsController.js";

const ingredientRouter = Router();

ingredientRouter.get("/ingredients", getAllIngredients);

ingredientRouter.get("/ingredients/:ingredientID", getIngredientById);

ingredientRouter.get("/ingredient", getIngredientsByName);

ingredientRouter.post("/ingredient", createIngredient);

export default ingredientRouter;
