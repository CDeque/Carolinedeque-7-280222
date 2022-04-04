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
      const tagText = document.createElement("p");
      const crossContainer = document.createElement("span");
      const cross = document.createElement("img");
      div.classList.add("tag_search");
      tag.classList.add("tag");
      tagText.classList.add("text");
      crossContainer.classList.add("close_button");
      cross.classList.add("btn");
      tagText.innerHTML = item.innerHTML;
      cross.src = "medias/close_button.png";
      section.appendChild(div);
      div.appendChild(tag);
      tag.appendChild(tagText);
      tag.appendChild(crossContainer);
      crossContainer.appendChild(cross);

      ////////// pour assigner la bonne couleur au tag
      if (
        item.parentElement.classList.contains("ingredients_options_container")
      ) {
        tag.style.backgroundColor = "#3282f7";
        tag.setAttribute("id", "in");
      } else if (
        item.parentElement.classList.contains("appliances_options_container")
      ) {
        tag.style.backgroundColor = "#68d9a4";
        tag.setAttribute("id", "ap");
      } else if (
        item.parentElement.classList.contains("ustensiles_options_container")
      ) {
        tag.style.backgroundColor = "#ed6454";
        tag.setAttribute("id", "us");
      }
      tags.push(tag);
      console.log(tags);
      sectionRecipes.innerHTML = "";

      // pour trier les recettes, les dropdown en fonction des tags choisis
      const tagValue = tagText.innerHTML.toLowerCase();
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
        btn.addEventListener("click", () => {
          btn.parentElement.parentElement.remove();

          if (tags.length >= 1) {
<<<<<<< HEAD
=======
       
>>>>>>> parent of 5b84209... Merge remote-tracking branch 'origin/master'
            tags.splice(tags.indexOf(tag), 1);

            console.log(tags);
          } else if (tags.length === 0) {
            // on vide les sections tag et dropdown
            document.querySelector(" .tag_section").innerHTML = "";
            document.querySelector(".filters_section").innerHTML = "";
            document.querySelector(".cards_container").innerHTML = "";
            recipesArray = "";
            tags = "";

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
          }
        });
      });
    });
  });
}
