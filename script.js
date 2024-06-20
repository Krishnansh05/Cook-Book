document.addEventListener('DOMContentLoaded', function() {
    const recipeForm = document.getElementById('recipe-form');
    const recipesContainer = document.getElementById('recipes');

    localStorage.removeItem('recipes');

    recipeForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const recipeName = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('ingredients').value;
        const procedure = document.getElementById('procedure').value;
        const timeTaken = document.getElementById('time-taken').value;
        const utensilsUsed = document.getElementById('utensils-used').value;
        const recipeImage = document.getElementById('recipe-image').files[0];

        const reader = new FileReader();
        reader.onload = function() {
            const imageUrl = reader.result;
            const recipe = {
                name: recipeName,
                ingredients: ingredients,
                procedure: procedure,
                timeTaken: timeTaken,
                utensilsUsed: utensilsUsed,
                imageUrl: imageUrl
            };
            addRecipeToList(recipe);
            saveRecipe(recipe);
        };
        reader.readAsDataURL(recipeImage);
    });

    function addRecipeToList(recipe) {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe-card');
        recipeCard.innerHTML = `
            <img src="${recipe.imageUrl}" alt="${recipe.name}">
            <h3>${recipe.name}</h3>
            <p>Time Taken: ${recipe.timeTaken}</p>
            <button onclick="viewRecipe('${recipe.name}')">View Recipe</button>
        `;
        recipesContainer.appendChild(recipeCard);
    }

    function saveRecipe(recipe) {
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes.push(recipe);
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }

    function loadRecipes() {
        recipesContainer.innerHTML = '';
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        recipes.forEach(recipe => addRecipeToList(recipe));
    }

    window.viewRecipe = function(recipeName) {
        let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
        const recipe = recipes.find(r => r.name === recipeName);
        if (recipe) {
            localStorage.setItem('currentRecipe', JSON.stringify(recipe));
            window.open('recipe.html', '_blank');
        }
    };

    loadRecipes(); // Ensure recipes are loaded on page load
});
