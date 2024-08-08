import { Router } from "express";

import {
  getSteps,
  getStepsById,
  createStep,
} from "../controller/stepsController.js";

const stepsRouter = Router();

stepsRouter.get("/steps", getSteps);

stepsRouter.get("/steps/:stepsID", getStepsById);

stepsRouter.post("/steps", createStep);

export default stepsRouter;
