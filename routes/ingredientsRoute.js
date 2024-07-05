import { Router } from "express";
import {
  getAllIngredients,
  getIngredientById,
  getIngredientsByName,
} from "../controller/ingredientsController";

const ingredientRouter = Router();

ingredientRouter.get("/ingredients", getAllIngredients);

ingredientRouter.get("/ingredients/:ingredientID", getIngredientById);

ingredientRouter.get("/ingredient", getIngredientsByName);

export default ingredientRouter;
