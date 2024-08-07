import { Router } from "express";
import { getAllUsers, getUserById } from "../controller/userController.js";

const userRouter = Router();

userRouter.get("/users", getAllUsers);

userRouter.get("/user/:userId", getUserById);

export default userRouter;
