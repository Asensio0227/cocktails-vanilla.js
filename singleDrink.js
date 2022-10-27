import fetchDrinks from './src/fetchDrinks.js';
import displayDrinks from './src/displaySingleDrink.js';

const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=`;


const presentDrinks = async () => {
  const id = localStorage.getItem('drink');
  if (!id) {
    window.location.replace('index.html')
  } else {
    
    const drink = await fetchDrinks(`${URL}${id}`);
    displayDrinks(drink)
  }
};

window.addEventListener('DOMContentLoaded',presentDrinks)