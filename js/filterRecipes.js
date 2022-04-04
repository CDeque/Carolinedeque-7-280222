import { CreateRecipeCard } from "./recipesCards.js";

// creation des filtres de recherche dans la searchbar principale

export function searchFilter(data) {
  const recipes = data;
  const sectionRecipes = document.querySelector(".cards_container");
  const itemLists = document.querySelectorAll(
    "li.ing_list,li.appli_list, li.ust_list"
  );

  const input = document.querySelector(".searchbar");

  input.addEventListener("keyup", (e) => {
    // pour recupérer la value de la searchbar
    const searchbarValue = e.target.value.toLowerCase();
    sectionRecipes.innerHTML = "";

    // pour ré-injecter les recette triées
    let recipesArray = [];
    let itemsArray = [];

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
          recipesArray.push(recipe);
          new CreateRecipeCard(recipe);

          // Pour n'afficher que les ingredients, ust et app necessaires aux recettes
          itemLists.forEach((item) => {
            if (
              recipe.ingredients.some((ing) =>
                ing.ingredient.toLowerCase().match(item.innerHTML.toLowerCase())
              ) ||
              recipe.appliance
                .toLowerCase()
                .match(item.innerHTML.toLowerCase()) ||
              recipe.ustensils.some((ust) =>
                ust.toLowerCase().match(item.innerHTML.toLowerCase())
              )
            ) {
              itemsArray.push(item);

              for (let it of itemsArray) {
                it.style.display = "flex";
              }
            } else {
              item.style.display = "none"; // sinon je les masque
            }
          });
        }
      });

<<<<<<< HEAD
      // si le nombre de caracteres saisis est inferieur a 2 alors les recettes
=======
      // si le nombre de caracteres saisis est inférieur a 2 alors les recettes
>>>>>>> parent of 5b84209... Merge remote-tracking branch 'origin/master'
    } else if (searchbarValue.length <= 2) {
      recipesArray = recipes.forEach((recipe) => {
        new CreateRecipeCard(recipe);
      });
    }
    //ajout du message d'erreur si aucune recettende correspond
    if (sectionRecipes.innerHTML === "") {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add("message_container");
      const messageText = document.createElement("p");
      messageText.classList.add("error_message");
      messageText.innerHTML =
        "Aucune recette ne correspond à votre critère... vous pouvez chercher &laquotarte au pommes&raquo, &laquopoisson&raquo, etc...";
      sectionRecipes.appendChild(messageDiv);
      messageDiv.appendChild(messageText);
    }
  });
}
