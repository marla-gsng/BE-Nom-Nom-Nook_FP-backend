const recipeData = [
  {
    title: "Spaghetti Aglio e Olio",
    ingredients: [
      { name: "Spaghetti", quantity: 400, unit: "g" },
      { name: "Olive oil", quantity: 120, unit: "ml" },
      { name: "Garlic", quantity: 6, unit: "cloves", notes: "thinly sliced" },
      { name: "Red pepper flakes", quantity: 1, unit: "teaspoon (5 ml)" },
      { name: "Parsley", quantity: 15, unit: "g", notes: "chopped" },
      { name: "Salt", unit: "to taste" },
      { name: "Parmesan cheese", unit: "optional, for serving" },
    ],
    instructions: [
      {
        step: "Cook the spaghetti according to the package instructions until al dente. Reserve 240 ml (1 cup) of pasta water and drain.",
      },
      { step: "Heat the olive oil in a large pan over medium heat." },
      {
        step: "Add the garlic and red pepper flakes, and sauté until the garlic is golden brown, about 2 minutes.",
      },
      {
        step: "Add the cooked spaghetti to the pan and toss to coat in the oil and garlic.",
      },
      { step: "Add reserved pasta water as needed to create a light sauce." },
      {
        step: "Remove from heat and stir in the chopped parsley. Season with salt to taste.",
      },
      { step: "Serve with grated Parmesan cheese if desired." },
    ],
    category: "Main Course",
    prepTime: "10 minutes",
    cookTime: "15 minutes",
    totalTime: "25 minutes",
    servings: 4,
    tags: ["vegetarian", "quick", "easy"],
  },
  {
    title: "Classic Pancakes",
    ingredients: [
      { name: "All-purpose flour", quantity: 190, unit: "g" },
      { name: "Baking powder", quantity: 14, unit: "g " },
      { name: "Salt", quantity: 5, unit: "g " },
      { name: "Sugar", quantity: 12, unit: "g " },
      { name: "Milk", quantity: 300, unit: "ml " },
      { name: "Egg", quantity: 1 },
      { name: "Butter", quantity: 45, unit: "g ", notes: "melted" },
    ],
    instructions: [
      {
        step: "In a large bowl, sift together the flour, baking powder, salt, and sugar.",
      },
      {
        step: "Make a well in the center and pour in the milk, egg, and melted butter.",
      },
      { step: "Mix until smooth." },
      {
        step: "Heat a lightly oiled griddle or frying pan over medium-high heat.",
      },
      {
        step: "Pour or scoop the batter onto the griddle, using approximately 60 ml (1/4 cup) for each pancake.",
      },
      { step: "Brown on both sides and serve hot with syrup and butter." },
    ],
    category: "Breakfast",
    prepTime: "10 minutes",
    cookTime: "20 minutes",
    totalTime: "30 minutes",
    servings: 4,
    tags: ["breakfast", "easy", "classic"],
  },
  {
    title: "Caprese Salad",
    ingredients: [
      { name: "Tomatoes", quantity: 4, unit: "sliced" },
      {
        name: "Fresh mozzarella cheese",
        quantity: 225,
        unit: "g",
        notes: "sliced",
      },
      { name: "Fresh basil leaves", quantity: 15, unit: "g " },
      { name: "Olive oil", quantity: 30, unit: "ml" },
      { name: "Balsamic vinegar", quantity: 15, unit: "ml " },
      { name: "Salt", unit: "to taste" },
      { name: "Black pepper", unit: "to taste" },
    ],
    instructions: [
      {
        step: "On a large platter, alternate and arrange the tomato slices, mozzarella slices, and basil leaves.",
      },
      { step: "Drizzle with olive oil and balsamic vinegar." },
      { step: "Season with salt and black pepper to taste." },
      {
        step: "Serve immediately or chill in the refrigerator for up to 1 hour before serving.",
      },
    ],
    category: "Appetizer",
    prepTime: "10 minutes",
    cookTime: "0 minutes",
    totalTime: "10 minutes",
    servings: 4,
    tags: ["vegetarian", "Italian", "fresh"],
  },
  {
    title: "Chicken Stir-Fry",
    ingredients: [
      {
        name: "Chicken breast",
        quantity: 450,
        unit: "g",
        notes: "cut into strips",
      },
      { name: "Soy sauce", quantity: 60, unit: "ml" },
      { name: "Honey", quantity: 30, unit: "ml" },
      { name: "Garlic", quantity: 3, unit: "cloves", notes: "minced" },
      { name: "Ginger", quantity: 15, unit: "g", notes: "grated" },
      { name: "Bell pepper", quantity: 1, unit: "sliced" },
      { name: "Broccoli florets", quantity: 300, unit: "g" },
      { name: "Carrot", quantity: 1, unit: "sliced" },
      { name: "Olive oil", quantity: 30, unit: "ml" },
      { name: "Cornstarch", quantity: 8, unit: "g" },
      { name: "Water", quantity: 60, unit: "ml" },
    ],
    instructions: [
      { step: "In a bowl, mix the soy sauce, honey, garlic, and ginger." },
      {
        step: "Toss the chicken strips in the mixture and let marinate for at least 15 minutes.",
      },
      {
        step: "Heat 15 ml (1 tablespoon) of olive oil in a large skillet over medium-high heat.",
      },
      {
        step: "Add the chicken and cook until browned and cooked through. Remove and set aside.",
      },
      { step: "In the same skillet, heat the remaining oil." },
      {
        step: "Add the bell pepper, broccoli, and carrot. Stir-fry until tender-crisp, about 5-7 minutes.",
      },
      { step: "Return the chicken to the skillet." },
      {
        step: "In a small bowl, mix the cornstarch and water, then add to the skillet.",
      },
      { step: "Cook until the sauce has thickened." },
      { step: "Serve hot over rice or noodles." },
    ],
    category: "Main Course",
    prepTime: "20 minutes",
    cookTime: "15 minutes",
    totalTime: "35 minutes",
    servings: 4,
    tags: ["quick", "Asian", "healthy"],
  },
  {
    title: "Chocolate Chip Cookies",
    ingredients: [
      { name: "Butter", quantity: 225, unit: "g", notes: "softened" },
      { name: "White sugar", quantity: 200, unit: "g" },
      { name: "Brown sugar", quantity: 220, unit: "g", notes: "packed" },
      { name: "Vanilla extract", quantity: 10, unit: "ml" },
      { name: "Eggs", quantity: 2 },
      { name: "All-purpose flour", quantity: 375, unit: "g" },
      { name: "Baking soda", quantity: 5, unit: "g" },
      { name: "Hot water", quantity: 10, unit: "ml" },
      { name: "Salt", quantity: 2.5, unit: "g" },
      { name: "Semi-sweet chocolate chips", quantity: 340, unit: "g" },
    ],
    instructions: [
      { step: "Preheat the oven to 175°C (350°F)." },
      {
        step: "Cream together the butter, white sugar, and brown sugar until smooth.",
      },
      { step: "Beat in the eggs one at a time, then stir in the vanilla." },
      {
        step: "Dissolve baking soda in hot water. Add to batter along with salt.",
      },
      { step: "Stir in flour and chocolate chips." },
      { step: "Drop by large spoonfuls onto ungreased pans." },
      { step: "Bake for about 10 minutes, or until edges are nicely browned." },
    ],
    category: "Dessert",
    prepTime: "15 minutes",
    cookTime: "10 minutes",
    totalTime: "25 minutes",
    servings: 24,
    tags: ["dessert", "cookies", "chocolate"],
  },
];

export default recipeData;
