import { CreateRecipeCard } from "./recipesCards.js";
import { IngredientsDropdown } from "./ingredientsDropdown.js";
import { UstensilsDropdown } from "./ustensilsDropdown.js";
import { AppliancesDropdown } from "./applianceDropdown.js";
import { dropdownFilterSearch } from "./filterDropdown.js";
//////////////////////////////////////////////////////
// Ajout de la fonction tag au clic sur un élément //
/////////////////////////////////////////////////////

export class FilterTags {
  constructor(data) {
    const recipes = data;

    this.section = document.querySelector(".tag_section");
    this.itemLists = document.querySelectorAll(
      "li.ing_list,li.appli_list, li.ust_list"
    );
    this.tags = [];
    this.recipesArray = [];
    this.sectionRecipes = document.querySelector(".cards_container");

    this.createTag(recipes);
  }
  createTag(recipes) {
    // Creation du tag au clic sur un élément li
    this.itemLists.forEach((item) => {
      item.addEventListener("click", () => {
        //Ajout du tag en html au clic sur un élément de la liste
        this.div = document.createElement("div");
        this.tag = document.createElement("div");
        this.tagText = document.createElement("p", "mb-0");
        this.crossContainer = document.createElement("span");
        this.cross = document.createElement("img");
        this.div.classList.add("tag_search");
        this.tag.classList.add("tag");
        this.tagText.classList.add("text");
        this.crossContainer.classList.add("close_button");
        this.cross.classList.add("btn");
        this.tagText.innerHTML = item.innerHTML;
        this.cross.src = "medias/close_button.png";
        this.section.appendChild(this.div);
        this.div.appendChild(this.tag);
        this.tag.appendChild(this.tagText);
        this.tag.appendChild(this.crossContainer);
        this.crossContainer.appendChild(this.cross);

        ////////// pour assigner la bonne couleur au tag
        if (
          item.parentElement.classList.contains("ingredients_options_container")
        ) {
          this.tag.style.backgroundColor = "#3282f7";
          this.tag.setAttribute("id", "in");
        } else if (
          item.parentElement.classList.contains("appliances_options_container")
        ) {
          this.tag.style.backgroundColor = "#68d9a4";
          this.tag.setAttribute("id", "ap");
        } else if (
          item.parentElement.classList.contains("ustensiles_options_container")
        ) {
          this.tag.style.backgroundColor = "#ed6454";
          this.tag.setAttribute("id", "us");
        }

        //pour fermer les dropdown au clic sur un element
        const ulContainer = document.querySelectorAll(".container");
        ulContainer.forEach((container) => {
          container.style.display = "none";
        });

        const filtersContainer = document.querySelectorAll(".filter");
        filtersContainer.forEach((fil) => {
          fil.style.width = "200px";
        });
        this.tags.push(this.tagText.innerHTML);
        console.log(this.tags);
        this.filterTag(recipes, this.tags);
        this.closeTag(recipes);
      });
    });
  }

  filterTag(recipes) {
    this.recipesArray = [];
    let itemArray = [];
    const itemLists = document.querySelectorAll(
      "li.ing_list,li.appli_list, li.ust_list"
    );
    //on filtre le tableau de tags
    this.tags.forEach((tag) => {
      const tagValue = tag.toLowerCase();
      //console.log(tagValue);
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
            this.sectionRecipes.innerHTML = "";

            this.recipesArray.push(recipe);
            this.recipesArray.forEach((rec) => {
              new CreateRecipeCard(rec);
            });
            console.log(this.recipesArray);

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
    });
  }
  closeTag(recipes) {
    const closeBtn = document.querySelectorAll(".close_button");

    closeBtn.forEach((btn) => {
      btn.addEventListener("click", () => {
        //supprime l'élément html
        btn.parentElement.parentElement.remove();
        if (this.tags.length) {
          // supprime le tag en fonction de son index du tableau
          this.tags.splice(this.tags.indexOf(this.tag), 1);

          this.filterTag(recipes);
        } else if (!this.tags.length) {
          // on vide les sections tag et dropdown
          document.querySelector(" .tag_section").innerHTML = "";
          document.querySelector(".filters_section").innerHTML = "";
          document.querySelector(".cards_container").innerHTML = "";
          this.recipesArray = "";
          this.tags = "";

          // On ré-injecte toutes les recettes
          this.recipesArray = recipes.forEach((recipe) => {
            new CreateRecipeCard(recipe);
          });

          // On remet a zéro les dropdown
          new IngredientsDropdown(recipes);
          new AppliancesDropdown(recipes);
          new UstensilsDropdown(recipes);
          dropdownFilterSearch();
          new FilterTags(recipes);
        }
      });
    });
  }
}
