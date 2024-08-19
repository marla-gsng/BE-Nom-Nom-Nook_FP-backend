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

// authRouter.delete("/user/:userId", async (req, res) => {
//   const { userId } = req.params;
//   try {
//     const user = await User.deleteOne({ _id });
//     if (!user) {
//       return res.status(404).json({ error: "User not found" });
//     }
//     return res.status(200).json({ message: "User deleted successfully" });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// });

export default authRouter;
