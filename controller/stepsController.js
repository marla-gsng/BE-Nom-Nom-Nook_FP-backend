import mongoose from "mongoose";
import Steps from "../models/stepsModel.js";

const getSteps = async (req, res) => {
  try {
    const steps = await Steps.find();
    if (steps.length < 1) {
      return res.status(404).json({ error: "No steps found" });
    }
    const stepsCount = await Steps.countDocuments();
    res.set("Content-Range", `steps 0-${steps.length}/${stepsCount}`);
    return res.status(200).json(steps);
  } catch (err) {
    console.error("Internal server error 🔴", err);
    res.status(500).json({ error: `${err.message} 🔴` });
  }
};

const getStepsById = async (req, res) => {
  const { stepsID } = req.params;
  try {
    if (!mongoose.Types.ObjectId.isValid(stepsID)) {
      return res.status(400).json({ error: "Invalid steps ID format" });
    }
    const step = await ProductModel.findById(stepsID);
    if (!step) {
      return res.status(404).json({ error: "Step not found" });
    }
    return res.status(200).json(step);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// const getSteps = async (req, res) => {
//   try {
//     const steps = await Steps.find();
//     res.status(200).json(steps);
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };

const createStep = async (req, res) => {
  const { step } = req.body;
  try {
    const newStep = await Steps.create({ step });

    return res.status(201).json(newStep);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { getSteps, getStepsById, createStep };
