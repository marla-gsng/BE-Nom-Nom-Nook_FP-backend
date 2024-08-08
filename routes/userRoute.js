import { Router } from "express";
import { getUsers, getUserById } from "../controller/userController.js";

const userRouter = Router();

userRouter.get("/users", getUsers);

// userRouter.get("/users", getAllUsers);

userRouter.get("/user/:userId", getUserById);

export default userRouter;
