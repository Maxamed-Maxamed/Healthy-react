const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;

const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'An error occurred');
  }
  return response.json();
};

export const searchRecipes = async (query, diet = '', cuisine = '') => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&query=${query}&diet=${diet}&cuisine=${cuisine}`;
  const response = await fetch(url);
  return handleResponse(response);
};

export const searchRecipesByNutrients = async (minCarbs, maxCarbs, minProtein, maxProtein, minCalories, maxCalories) => {
  const url = `https://api.spoonacular.com/recipes/findByNutrients?apiKey=${API_KEY}&minCarbs=${minCarbs}&maxCarbs=${maxCarbs}&minProtein=${minProtein}&maxProtein=${maxProtein}&minCalories=${minCalories}&maxCalories=${maxCalories}`;
  const response = await fetch(url);
  return handleResponse(response);
};

export const getRecipeInformation = async (id) => {
  const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
  const response = await fetch(url);
  return handleResponse(response);
};

export const getRandomRecipes = async (number = 10) => {
  const url = `https://api.spoonacular.com/recipes/random?apiKey=${API_KEY}&number=${number}`;
  const response = await fetch(url);
  return handleResponse(response);
};