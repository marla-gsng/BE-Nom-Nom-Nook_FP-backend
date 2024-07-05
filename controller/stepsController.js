import mongoose from "mongoose";
import Steps from "../models/stepsModel.js";

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

const getSteps = async (req, res) => {
  try {
    const steps = await Steps.find();
    res.status(200).json(steps);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export { getStepsById, getSteps };
