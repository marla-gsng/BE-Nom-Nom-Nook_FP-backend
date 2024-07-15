import mongoose from "mongoose";

const stepsSchema = new mongoose.Schema({
  step: {
    type: String,
    required: false,
  },

  // description: {
  //   type: String,
  //   required: true,
  // },

  // duration: {
  //   type: Number,
  //   required: true,
  // },
});

const Steps = mongoose.model("Steps", stepsSchema);
export default Steps;
