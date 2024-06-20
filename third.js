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
    name: "Sushi",
    ingredients: "3 tablespoons white sugar, 1 ½ teaspoons salt, 4 sheets nori seaweed sheets, ½ pound imitation crabmeat, flaked, 1 avocado(peeled, pitted, and sliced), ½ cucumber(peeled, cut into small strips) and 2 tablespoons pickled ginger.",

    procedure: "Step 1. Gather all ingredients.  Step 2. Preheat the oven to 300 degrees F (150 degrees C). Step 3. Bring water to a boil in a medium pot; stir in rice. Step 4. Reduce heat to medium-low, cover, and simmer until rice is tender and water has been absorbed, 20 to 25 minutes. Step 5. Mix rice vinegar, sugar, and salt in a small bowl. Step 6. Gently stir into cooked rice in the pot and set aside. Step 7. Lay nori sheets on a baking sheet. Step 8. Heat nori in the preheated oven until warm, 1 to 2 minutes. Step 9. Center 1 nori sheet on a bamboo sushi mat. Use wet hands to spread a thin layer of rice on top. Step 10. Arrange 1/4 of the crabmeat, avocado, cucumber, and pickled ginger over rice in a line down the center. Step 11. Lift one end of the mat and roll it tightly over filling to make a complete roll. Step 12. Repeat with remaining ingredients. Step 13. Use a wet, sharp knife to cut each roll into 4 to 6 slices.",


    timeTaken: "Prep Time - 40mins, Cook Time - 35mins, Total Time - 1hr 15mins.",


    utensilsUsed: "Medium Pot, Small bowl, Spoons and spatula, Baking dish, Bamboo sushi mat, Sharp knife, etc.",


    imageUrl: "./images/Sushi/IMG-20240527-WA0028.jpg"
};
localStorage.setItem('currentRecipe', JSON.stringify(sampleRecipe));
  
