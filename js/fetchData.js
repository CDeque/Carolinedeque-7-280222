import { CreateMainPage } from "./index.js";

// fetch pour récupérer la data du fichier JSON

export const getRecipes = () => {
  fetch("data/recipes.json")
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      new CreateMainPage(data.recipes);
    })
    .catch((err) => {
      return Error(err);
    });
};
