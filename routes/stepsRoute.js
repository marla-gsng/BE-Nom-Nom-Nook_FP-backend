import { Router } from "express";

import {
  getSteps,
  getStepsById,
  createStep,
  deleteStep,
} from "../controller/stepsController.js";

const stepsRouter = Router();

stepsRouter.get("/steps", getSteps);

stepsRouter.get("/steps/:stepsId", getStepsById);

stepsRouter.post("/steps", createStep);

stepsRouter.delete("/steps/:stepId", deleteStep);

export default stepsRouter;
