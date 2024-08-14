import { Router } from "express";
import {
  getUsers,
  getUserById,
  getUserByToken,
} from "../controller/userController.js";

const userRouter = Router();

userRouter.get("/users", getUsers);

// userRouter.get("/users", getAllUsers);

userRouter.get("/users/:userId", getUserById);

userRouter.get("/users/token", getUserByToken);

export default userRouter;
