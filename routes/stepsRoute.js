import { Router } from "express";

import {
  getStepsById,
  getSteps,
  createStep,
} from "../controller/stepsController.js";

const stepsRouter = Router();

stepsRouter.get("/steps", getSteps);

stepsRouter.get("/steps/:stepsID", getStepsById);

stepsRouter.post("/steps", createStep);

export default stepsRouter;
