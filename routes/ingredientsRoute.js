import { Router } from "express";
import {
  getIngredients,
  getIngredientById,
  getIngredientsByName,
  createIngredient,
  updateIngredient,
  deleteIngredients,
} from "../controller/ingredientsController.js";

const ingredientRouter = Router();

ingredientRouter.get("/ingredients", getIngredients);

ingredientRouter.get("/ingredients/:ingredientId", getIngredientById);

ingredientRouter.get("/ingredient", getIngredientsByName);

ingredientRouter.post("/ingredients", createIngredient);

ingredientRouter.put("/ingredients/:ingredientId", updateIngredient);

ingredientRouter.delete("/ingredients/:ingredientId", deleteIngredients);

export default ingredientRouter;
