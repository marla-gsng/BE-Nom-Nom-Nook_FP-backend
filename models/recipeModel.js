import mongoose, { Schema } from "mongoose";

const recipeSchema = new Schema({
  // _id: { type: Number, required: false },
  title: { type: String, required: false },
  ingredients: [
    {
      type: Schema.Types.ObjectId,
      ref: "Ingredient",
      required: false,
    },
  ],
  instructions: [
    {
      type: Schema.Types.ObjectId,
      ref: "Steps",
      required: false,
    },
  ],
  category: { type: String, required: false },
  prepTime: { type: String, required: false },
  cookTime: { type: String, required: false },
  totalTime: { type: String, required: false },
  servings: { type: Number, required: false },
  tags: { type: [String], required: false },
});

const Recipe = mongoose.model("Recipe", recipeSchema);

export default Recipe;

// id: {
//   type: Number,
//   required: true,
// },

// title: {
//   type: String,
//   required: true,
// },

// description: {
//   type: String,
//   required: false,
// },

// ingredients: [
//   {
//     ingredient: {
//       type: Schema.Types.ObjectId,
//       ref: "ingredient",
//       required: true,
//     },
//     quantity: {
//       type: Number,
//       required: true,
//     },
//   },
// ],

// steps: {
//   type: Schema.Types.ObjectId,
//   ref: "steps",
//   required: true,
// },

// prep_time: {
//   type: Number,
//   required: true,
// },

// cook_time: {
//   type: Number,
//   required: true,
// },

// total_time: {
//   type: Number,
//   required: true,
// },

// servings: {
//   type: Number,
//   required: true,
// },

// tags: {
//   type: Array,
//   default: [],
// },

// category: {
//   type: String,
//   required: true,
// },

// image: {
//   type: String,
//   required: true,
// },
// });
