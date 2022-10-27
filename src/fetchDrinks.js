import {showLoading} from "./toggleLoading.js";

const getCocktails = async (URL) => {
  try {
    showLoading()
    const resp = await fetch(URL);
    const data = await resp.json();
    return data
  } catch (error) {
    console.log(error);
  }
}

export default getCocktails;