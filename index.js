import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipeRoute.js";
import ingredientRouter from "./routes/ingredientsRoute.js";
import stepsRouter from "./routes/stepsRoute.js";
import userRouter from "./routes/userRoute.js";
import authRouter from "./routes/authRoute.js";

const MONGO_URI = process.env.MONGO_URI;

export const app = express();

const corsOptions = {
  exposedHeaders: ["Content-Range"],
};

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

app.use(
  "/api",
  recipeRouter,
  ingredientRouter,
  stepsRouter,
  userRouter,
  authRouter
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// app.get("/api", (req, res) => {
//   try {
//     const data = req.body;
//     res.send(data);
//   } catch (error) {
//     res.status(400).send(error);
//   }
// });

// app.post("/api/users", (req, res) => {
//   res.send(req.body);
// });

// IMPORTANT !!
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
