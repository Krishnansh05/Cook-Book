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
    name: "Butter Chicken",

    ingredients: "2 tablespoons peanut oil(divided), 1 shallot(finely chopped), ¼ white onion(chopped), 2 tablespoons butter, 1 tablespoon ginger garlic paste, 2 teaspoons lemon juice, 2 teaspoons garam masala, divided, 1 teaspoon chili powder, 1 teaspoon ground cumin, 1 bay leaf, 1 cup tomato puree, 1 cup half-and-half, ¼ cup plain yogurt, 1 pinch salt and ground black pepper to taste, 1 pound chicken thighs (boneless, skinless, cut into bite-size pieces), ¼ teaspoon cayenne pepper, or to taste, 1 tablespoon cornstarch and ¼ cup water.",

    procedure: "Step 1. Heat 1 tablespoon oil in a large saucepan over medium-high heat. Step 2. Sauté shallot and onion until soft and translucent, about 5 minutes. Step 3. Stir in butter, ginger-garlic paste, lemon juice, 1 teaspoon garam masala, chili powder, cumin, and bay leaf. Cook and stir for 1 minute. Step 4. Add tomato sauce, and cook for 2 minutes, continuing to frequently stir. Step 5. Stir in half-and-half and yogurt. Step 6. Reduce heat to low, and simmer for 10 minutes, frequently stirring. Step 7. Season with salt and pepper. Remove from heat and set aside. Step 8. Heat remaining 1 tablespoon oil in a large heavy skillet over medium heat. Step 9. Cook chicken until lightly browned, about 10 minutes. Step 10. Reduce heat, and season with remaining 1 teaspoon garam masala and cayenne. Stir in a few spoonfuls of sauce, and simmer until liquid has reduced, and chicken is no longer pink. Step 11. Add cooked chicken into sauce and stir together. Step 12. Dissolve cornstarch into water, then mix into the sauce. Cook for 5 to 10 minutes or until thickened. Step 13. Serve hot over rice with naan.",

    timeTaken: "Prep Time - 15mins, Cook Time - 35mins, Total Time - 50mins.",

    utensilsUsed: "Saucepan, Large heavy skillet, Spoons,  Stirrer, etc.",

    imageUrl: "./images/Butter Chicken/IMG-20240527-WA0021.jpg"
};
localStorage.setItem('currentRecipe', JSON.stringify(sampleRecipe));
  
