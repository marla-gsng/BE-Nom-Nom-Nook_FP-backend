import { Router } from "express";
import {
  getUsers,
  getUserById,
  getUserByToken,
  deleteUser,
  updateUserFavorites,
  getUserFavorites,
} from "../controller/userController.js";

const userRouter = Router();

userRouter.get("/users", getUsers);

// userRouter.get("/users", getAllUsers);

userRouter.get("/users/:userId", getUserById);

userRouter.post("/users/token", getUserByToken);

userRouter.delete("/users/:userId", deleteUser);

userRouter.put("/users/:userId/favorites", updateUserFavorites);
userRouter.get("/users/:userId/favorites", getUserFavorites);

export default userRouter;
