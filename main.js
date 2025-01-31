API_KEY = "0832e0f8de16440f9a9c1482225c8ecf";

const recipeListEl = document.getElementById("recipe_list");

// Display the elements to the DOM
const displayRecipes = (recipes) => {
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {
        const recipeItemEl = document.createElement('li');
        recipeItemEl.classList.add("recipe_item");

        const  recipeImageEl = document.createElement('img');
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = recipe.sourceName;

        const recipeTitleEl = document.createElement('h2');
        recipeTitleEl.innerText = recipe.title;

        const recipeIngridientsEl = document.createElement('p');
        recipeIngridientsEl.innerHTML = `
        < Strong> Ingredients:</Strong> 
        ${recipe.extendedIngredients.map((ingredient) => ingredient.original).join(", ")}
        `;
        
        const recipeLinkEl = document.createElement('a');
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "View Recipe";

        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngridientsEl);
        recipeItemEl.appendChild(recipeLinkEl);

        recipeListEl.appendChild(recipeItemEl);
    });
};

//Fetching data from an API
const getRecipes = async () => {
    const response = await fetch(`https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`);

    const data = await response.json();

    return data.recipes;
}

//Initializing the fetched data
const init = async () => {
    const recipes = await getRecipes();
    displayRecipes(recipes);
    console.log(recipes);
}

init();


























