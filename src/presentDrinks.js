import fetchDrinks from './fetchDrinks.js';
import displayDrinks from './displayDrinks.js';
import setDrink from './setDrink.js';

const startView = async (url) => {
  const drinks = await fetchDrinks(url);
  const section = await displayDrinks(drinks);
  if (section) {
    setDrink(section);
  }
}


export default startView;