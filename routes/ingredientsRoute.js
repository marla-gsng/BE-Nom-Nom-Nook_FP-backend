import { Router } from "express";
import {
  getIngredients,
  // getAllIngredients,
  getIngredientById,
  getIngredientsByName,
  createIngredient,
} from "../controller/ingredientsController.js";

const ingredientRouter = Router();

ingredientRouter.get("/ingredients", getIngredients);

// ingredientRouter.get("/ingredients", getAllIngredients);

ingredientRouter.get("/ingredients/:ingredientID", getIngredientById);

ingredientRouter.get("/ingredient", getIngredientsByName);

ingredientRouter.post("/ingredients", createIngredient);

export default ingredientRouter;
