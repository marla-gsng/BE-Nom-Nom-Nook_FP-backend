import mongoose from "mongoose";

const stepsSchema = new mongoose.Schema({
  step: {
    type: String,
    required: [true],
  },

  description: {
    type: String,
    required: [true],
  },

  duration: {
    type: Number,
    required: [true],
  },
});

const Steps = mongoose.model("Steps", stepsSchema);
export default Steps;
