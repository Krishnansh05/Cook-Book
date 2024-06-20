document.addEventListener('DOMContentLoaded', function() {
    const recipe = JSON.parse(localStorage.getItem('currentRecipe'));
    if (recipe) {
        document.getElementById('recipe-name').textContent = recipe.name;
        document.getElementById('recipe-image').src = recipe.imageUrl;
        document.getElementById('ingredients').textContent = recipe.ingredients;
        const procedureSteps = recipe.procedure.split('Step').map((step, index) => index > 0 ? 'Step' + step : step).join('<br>');
        document.getElementById('procedure').innerHTML = procedureSteps; // Use innerHTML to preserve <br> tags
        document.getElementById('time-taken').textContent = recipe.timeTaken;
        document.getElementById('utensils-used').textContent = recipe.utensilsUsed;
    }
});
const sampleRecipe = {
    name: "Pasta",

    ingredients: "1 package of dry spaghetti, 8 tablespoons butter, 2 tablespoons minced garlic, 1 tablespoon chopped fresh parsley, Salt and freshly ground black pepper to taste and 1 cup grated Parmesan cheese.",

    procedure: "Step 1. Cook the spaghetti. Step 2. Melt butter with garlic very slowly to avoid burning the garlic. Step 3. Season with parsley, salt, black pepper, and cayenne. Step 4. Mix everything. Step 5. Serve with grated Parmesan cheese.",

    timeTaken: "Prep Time - 15mins, Cook Time - 25mins, Total Time - 40mins.",

    utensilsUsed: "Large Pot, Skillet, Stirrer, Fork, etc.",

    imageUrl: "./images/Pasta Recipe/IMG-20240527-WA0019.jpg"
};
localStorage.setItem('currentRecipe', JSON.stringify(sampleRecipe));
  
