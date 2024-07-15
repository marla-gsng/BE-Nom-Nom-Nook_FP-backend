import mongoose from "mongoose";

const instructionSchema = new mongoose.Schema({
  step: { type: String, required: false },
});

const Instructions = mongoose.model("Instructions", instructionSchema);

export default Instructions;
