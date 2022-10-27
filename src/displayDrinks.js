import { hideLoading } from './toggleLoading.js';
import get from './getElement.js'; 

const displayDrinks = ({ drinks }) => {
  const section = get('.section-center');
  const title = get('.title');
  if (!drinks) {
    hideLoading();
    title.textContent = `Sorry, no drink matched your search criteria`;
    section.innerHTML = null;
    return
  }

  const newDrinks = drinks.map((items) => {
    const {
      idDrink: id,
      strDrink: name,
      strDrinkThumb: image,
    } = items;
    return `<a href="drink.html">
        <article class="cocktail" data-id="${id}">
          <img src="${image}" alt="${name}"/>
          <h3>${name}</h3>
        </article>
      </a>`
  }).join('');
  hideLoading();
  title.textContent = ''
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks 