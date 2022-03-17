import { getRecipes } from "./fetchData.js";
import { IngredientsDropdown } from "./ingredientsDropdown.js";
import { UstensilsDropdown } from "./ustensilsDropdown.js";
import { DevicesDropdown } from "./devicesDropdown.js";
import { CreateRecipeCard } from "./recipesCards.js";

export class CreateMainPage {
  constructor(data) {
    this.data = data;

    this.body = document.querySelector("body");
    this.createHeader();
    this.createSearchBar();
    this.createDom();
    new IngredientsDropdown();
    new UstensilsDropdown();
    new DevicesDropdown();
    this.displayRecipes(data);
  }
  createHeader() {
    this.header = document.createElement("header");
    this.header.classList.add("header", "text-center");
    this.logo = document.createElement("img");
    this.logo.src = "medias/logo.png";
    this.logo.alt = "logo Les Petits Plats";
    this.siteTitle = document.createElement("h1");
    this.siteTitle.innerHTML = "Les Petits Plats";
    this.body.appendChild(this.header);
    this.header.appendChild(this.logo);
    this.header.appendChild(this.siteTitle);
  }
  createSearchBar() {
    this.form = document.createElement("form");
    this.form.classList.add("input-group");
    this.input = document.createElement("input");
    this.input.classList.add(
      "form-control",
      "mx-5",
      "py-3",
      "my-3",
      "searchbar"
    );
    this.input.style.backgroundColor = "#e7e7e7";
    this.input.setAttribute("placeholder", "Rechercher une recette...");
    this.header.appendChild(this.form);
    this.form.appendChild(this.input);
  }
  createDom() {
    this.main = document.createElement("main");
    this.body.appendChild(this.main);
    this.section = document.createElement("section");
    this.section.classList.add("filters_container");
    this.sectionRecipes = document.createElement("section");
    this.sectionRecipes.classList.add("cards_container", "row", "mx-5", "my-3");
    this.main.appendChild(this.section);
    this.main.appendChild(this.sectionRecipes);
  }

  displayRecipes(data) {
    const recipes = data;

    recipes.forEach((recipe) => {
      new CreateRecipeCard(recipe);
    });
  }
}
getRecipes();
