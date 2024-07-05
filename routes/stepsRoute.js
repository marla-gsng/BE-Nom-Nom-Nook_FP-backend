import { Router } from "express";

import { getStepsById, getSteps } from "../controllers/stepsController.js";

const stepsRouter = Router();

stepsRouter.get("/steps", getSteps);

stepsRouter.get("/steps/:stepsID", getStepsById);

export default stepsRouter;
