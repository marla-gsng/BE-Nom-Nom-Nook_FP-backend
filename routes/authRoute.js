import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
} from "../controller/authController.js";

const authRouter = Router();

authRouter.post("/user", registerUser); // Register a new user

authRouter.post("/login", loginUser);

authRouter.get("/logout/:userId", logoutUser);

export default authRouter;
