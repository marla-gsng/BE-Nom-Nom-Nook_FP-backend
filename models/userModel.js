import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  saved_recipes: {
    type: Array,
    default: [],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
