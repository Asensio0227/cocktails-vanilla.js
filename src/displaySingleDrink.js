import get from './getElement.js'
import { hideLoading } from './toggleLoading.js';

const displaySingleDrink = (data) => {
  hideLoading()
  const drink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strInstructions: desc
  } = drink;
  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];
  const img = get('.drink-img');
  const drinkName = get('.drink-name');
  const drinkDesc = get('.drink-desc');
  const ingredients = get('.drink-ingredients');

  img.src = image;
  document.title = name;
  drinkName.textContent = name;
  drinkDesc.textContent = desc;
  ingredients.innerHTML = list.map((item) => {
    if (!item) return;
    return `<li><i class="far fa-check-square"></i>${item}</li>`;
  })
    .join('');
};

export default displaySingleDrink;