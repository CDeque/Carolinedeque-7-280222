import { CreateRecipeCard } from "./recipesCards.js";
import { IngredientsDropdown } from "./ingredientsDropdown.js";
import { UstensilsDropdown } from "./ustensilsDropdown.js";
import { AppliancesDropdown } from "./applianceDropdown.js";
import { dropdownFilterSearch } from "./filterDropdown.js";
//////////////////////////////////////////////////////
// Ajout de la fonction tag au clic sur un élément //
/////////////////////////////////////////////////////

export function filterTag(data) {
  const recipes = data;
  const section = document.querySelector(".tag_section");
  let recipesArray = [];
  let tags = [];
  let itemArray = [];
  const sectionRecipes = document.querySelector(".cards_container");

  const itemLists = document.querySelectorAll(
    "li.ing_list,li.appli_list, li.ust_list"
  );

  // Creation du tag au clic sur un élément li
  itemLists.forEach((item) => {
    item.addEventListener("click", () => {
      //Ajout du tag en html au clic sur un élément de la liste
      const div = document.createElement("div");
      const tag = document.createElement("div");
      div.classList.add("tag_search");
      tag.classList.add("tag");
      tag.innerHTML = `${item.innerHTML}<div class="close_button"><img class="btn" src="medias/close_button.png"></img></div>`;
      section.appendChild(div);
      div.appendChild(tag);
      tags.push(tag);

      ////////// pour assigner la bonne couleur au tag
      if (
        item.parentElement.classList.contains("ingredients_options_container")
      ) {
        tag.style.backgroundColor = "#3282f7";
      } else if (
        item.parentElement.classList.contains("appliances_options_container")
      ) {
        tag.style.backgroundColor = "#68d9a4";
      } else if (
        item.parentElement.classList.contains("ustensiles_options_container")
      ) {
        tag.style.backgroundColor = "#ed6454";
      }

      sectionRecipes.innerHTML = "";

      // pour trier les recettes, les dropdown en fonction des tags choisis
      const tagValue = item.innerHTML.toLowerCase();
      console.log(tagValue);
      if (tagValue.length > 0) {
        recipes.filter((recipe) => {
          if (
            recipe.name.toLowerCase().match(tagValue) ||
            recipe.description.toLowerCase().match(tagValue) ||
            recipe.ingredients.some((ing) =>
              ing.ingredient.toLowerCase().match(tagValue)
            ) ||
            recipe.appliance.toLowerCase().match(tagValue) ||
            recipe.ustensils.some((ust) => ust.toLowerCase().match(tagValue))
          ) {
            //On re-injecte les recettes dans la section
            recipesArray.push(recipe);

            new CreateRecipeCard(recipe);

            // Pour trier les menus dropdown en ne laissant que les elements correspondants aux recettes
            itemLists.forEach((item) => {
              if (
                recipe.ingredients.some((ing) =>
                  ing.ingredient
                    .toLowerCase()
                    .match(item.innerHTML.toLowerCase())
                ) ||
                recipe.appliance
                  .toLowerCase()
                  .match(item.innerHTML.toLowerCase()) ||
                recipe.ustensils.some((ust) =>
                  ust.toLowerCase().match(item.innerHTML.toLowerCase())
                )
              ) {
                // si items dans la recette alors je les affiche
                itemArray.push(item);

                for (let it of itemArray) {
                  it.style.display = "flex";
                }
              } else {
                item.style.display = "none"; // sinon je les masque
              }
            });
          }
        });
      }

      //pour fermer les dropdown au clic sur un element
      const ulContainer = document.querySelectorAll(".container");
      ulContainer.forEach((container) => {
        container.style.display = "none";
      });

      //Pour fermer les tags au clic
      const closeBtn = document.querySelectorAll(".close_button");

      closeBtn.forEach((btn) => {
        //console.log(closeBtn);
        btn.addEventListener("click", () => {
          tags.forEach((tag) => {
            // console.log(tags);
            tags.splice(tags.indexOf(tag), 0);
            btn.parentElement.remove();
          });

          // on vide la section dropdown

          document.querySelector(".filters_section").innerHTML = "";

          recipesArray = "";

          // On remet a zéro les dropdown
          new IngredientsDropdown(data);
          new AppliancesDropdown(data);
          new UstensilsDropdown(data);
          dropdownFilterSearch();
          filterTag(data);
          // On ré-injecte toutes les recettes
          recipesArray = recipes.forEach((recipe) => {
            new CreateRecipeCard(recipe);
          });
        });
      });
    });
  });
}
