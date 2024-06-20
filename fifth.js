document.addEventListener('DOMContentLoaded', function() {
    const recipe = JSON.parse(localStorage.getItem('currentRecipe'));
    if (recipe) {
        document.getElementById('recipe-name').textContent = recipe.name;
        document.getElementById('recipe-image').src = recipe.imageUrl;
        document.getElementById('ingredients').textContent = recipe.ingredients;
        document.getElementById('procedure').textContent = recipe.procedure;
        document.getElementById('time-taken').textContent = recipe.timeTaken;
        document.getElementById('utensils-used').textContent = recipe.utensilsUsed;
    }
});
const sampleRecipe = {
    name: "Hot Chocolate",

    ingredients: "Regular milk, Semisweet chocolate chips(you could also use milk or dark chocolate chips),  Heavy whipping cream, Sweetened condensed milk and A teaspoon of vanilla extract.",

    procedure: "Step 1. Simply combine all the ingredients in a slow cooker. Step 2. Stir to combine and cook on Low(stirring occasionally) until the chocolate is melted and the mixture is smooth. Step 3. Once everything is done, ladle the hot chocolate into a mug Step 4. The rest is up to you! dress it up with your favorite toppings(Whipped cream and marshmallows are the traditional choice).",

    timeTaken: "Prep Time - 10mins, Cook Time - 2hrs 10mins, Total Time - 2hrs 15mins.",

    utensilsUsed: "Slow cooker, Stirrer, Mug, Spoons, etc.",

    imageUrl: "images/Hot Chocolate/IMG-20240528-WA0022.jpg"
};
localStorage.setItem('currentRecipe', JSON.stringify(sampleRecipe));
  