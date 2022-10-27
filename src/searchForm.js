import get from './getElement.js';
import startView from './presentDrinks.js';

const baseURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const form = get('.search-form');
const searchInput = get('[name="drink"]');

form.addEventListener('keyup', function (e) {
  e.preventDefault();
  const value = searchInput.value;
  if (!value) return;
  startView(`${baseURL}${value}`);
})