import startView from './src/presentDrinks.js';
import './src/searchForm.js'

const URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=x';


window.addEventListener('DOMContentLoaded', function(){
  startView(URL);
});


