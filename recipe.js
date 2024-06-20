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
