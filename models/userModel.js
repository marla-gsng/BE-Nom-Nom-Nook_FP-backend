import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
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

  // isAdmin: {
  //   type: Boolean,
  //   default: false,
  // },

  token: {
    type: String,
    required: false,
  },

  favorites: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Recipe",
      default: [],
    },
  ],

  // saved_recipes: {
  //   type: Array,
  // default: [],
});

const User = mongoose.model("User", userSchema);

export default User;
