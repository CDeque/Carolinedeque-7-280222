import { CreateRecipeCard } from "./recipesCards.js";

// creation des filtres de recherche dans la searchbar principale

export function searchFilter(data) {
  const recipes = data;
  this.sectionRecipes = document.querySelector(".cards_container");

  this.input = document.querySelector(".searchbar");

  this.input.addEventListener("keyup", (e) => {
    // pour recupérer la value de la searchbar
    const searchbarValue = e.target.value.toLowerCase();
    this.sectionRecipes.innerHTML = "";
    // pour ré-injecter les recette triées
    this.recipesArray = [];

    // si la valeur de la barre de recherche est supérieure ou égale à 3 caractères
    if (searchbarValue.length >= 3) {
      recipes.filter((recipe) => {
        if (
          recipe.name.toLowerCase().match(searchbarValue) ||
          recipe.description.toLowerCase().match(searchbarValue) ||
          recipe.ingredients.some((ing) =>
            ing.ingredient.toLowerCase().match(searchbarValue)
          ) ||
          recipe.appliance.toLowerCase().match(searchbarValue) ||
          recipe.ustensils.every((ust) =>
            ust.toLowerCase().match(searchbarValue)
          )
        ) {
          this.recipesArray.push(recipe);
          console.log(this.recipesArray);
          new CreateRecipeCard(recipe);
        }
      });
      // si le nombre de caracteres saisis est inferieur a 2 alors les recettes
    } else if (searchbarValue.length <= 2) {
      this.recipesArray = recipes.forEach((recipe) => {
        new CreateRecipeCard(recipe);
      });
    }
  });
}
//////////////////////////////////////////////
// mise en place du tri dans les dropdowns //
////////////////////////////////////////////

export function dropdownFilterSearch() {
  const inputs = document.querySelectorAll(".search");
  const allElementsLists = document.querySelectorAll(
    ".ing_list,.appli_list, .ust_list"
  );
  const dropdownBtn = document.querySelectorAll(".dropdown_btn");
  // récupération de chaque input et de sa valeur
  inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
      const searchbarValue = e.target.value.toLowerCase();

      // pour chaque éléments on vérifie si la valeur correspond à un élément de la liste et une recette
      allElementsLists.forEach((element) => {
        // si oui on les affiche, non on les masque
        if (element.innerHTML.toLowerCase().match(searchbarValue)) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
        // Pour afficher les elements dans les autres dropdown lorsque l'on clique dessus
        dropdownBtn.forEach((btn) => {
          btn.addEventListener("focus", () => {
            element.style.display = "flex";
          });
        });
      });
    });
  });
}
