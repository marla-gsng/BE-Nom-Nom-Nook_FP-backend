import express from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import recipeRouter from "./routes/recipeRoute.js";
import ingredientRouter from "./routes/ingredientsRoute.js";
import stepsRouter from "./routes/stepsRoute.js";

const MONGO_URI = process.env.MONGO_URI;

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", recipeRouter, ingredientRouter, stepsRouter);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api", (req, res) => {
  res.send("Hello from API");
});

app.post("/user", (req, res) => {
  res.send(req.body);
});

// IMPORTANT !!
app.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
