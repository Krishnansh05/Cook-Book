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
    name: "French Croissants",

    ingredients: "3 tablespoons warm water (110 degrees F/45 degrees C), 1 ¼ teaspoons active dry yeast, 1 teaspoon white sugar, 1 ¾ cups all-purpose flour, ⅔ cup warm milk, 2 teaspoons white sugar(separate), 1 ½ teaspoons salt, 2 tablespoons vegetable oil, ⅔ cup unsalted butter(chilled), 1 large egg and 1 tablespoon water.",

    procedure: "Step 1. Combine warm water, yeast, and 1 teaspoon sugar in a small bowl. Step 2. Let stand until yeast softens and begins to form a creamy foam, about 5 minutes. Step 3. Measure flour into a mixing bowl. Step 4. Combine warm milk, 2 teaspoons sugar, and salt in a separate bowl; blend milk mixture, yeast mixture, and oil into flour. Step 5. Mix well and knead until smooth. Step 6. Cover, and let rise until over tripled in volume, about 3 hours. Step 7. Deflate gently, and let rise again until doubled, about another 3 hours. Step 8. Deflate dough and chill for 20 minutes. Step 9. Massage butter until pliable, but not soft and oily. Step 10. Pat dough into a 14x8-inch rectangle. Step 11. Smear butter over top two-thirds, leaving a 1/4-inch margin all around. Step 12. Fold unbuttered third over middle third, and buttered top third down over that. Step 13. Turn 90 degrees, so that folds are to left and right. Step 14. Roll out to a 14x6-inch rectangle. Step 15. Fold in three again. Step 16. Sprinkle lightly with flour, and put dough in a resealable plastic bag. Step 17. Refrigerate for 2 hours. Step 18. Unwrap, sprinkle with flour, and deflate gently. Step 19. Roll to a 14x6-inch rectangle, and fold again. Turn 90 degrees, and repeat. Wrap and chill 2 hours. Step 20. Preheat the oven to 475 degrees F (245 degrees C). Step 21. To shape, roll dough out to a 20x5-inch rectangle. Cut in half crosswise, and chill half while shaping the other half. Step 22. Roll out to a 15x5-inch rectangle. Cut into three 5x5-inch squares. Cut each square in half diagonally. Step 23. Roll out to a 15x5-inch rectangle. Cut into three 5x5-inch squares. Cut each square in half diagonally. Step 24. Roll each triangle lightly to elongate the point, and make it 7 inches long. Step 25. Grab the other 2 points, and stretch them out slightly as you roll it up. Step 26. Place on a baking sheet, curving slightly. Let shaped croissants rise until puffy and light. Step 27. In a small bowl, beat together egg and 1 tablespoon water. Glaze croissants with egg wash. Step 28. Bake in the preheated oven until crisp, flaky, and golden brown, about 12 to 15 minutes. Step 29. Your French Croissants are ready to eat.",

    timeTaken: "Prep Time - 40mins, Cook Time - 20mins, Additional Time - 10hrs 20mins Total Time - 11hrs 20mins.",

    utensilsUsed: "2 Small bowls, Mixing bowl, Bowl, Rolling pin, Large Pot, Knife, Baking sheet, etc.",

    imageUrl: "images/Croissant Recipe/IMG-20240527-WA0013.jpg"
};
localStorage.setItem('currentRecipe', JSON.stringify(sampleRecipe));
  