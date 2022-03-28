export class CreateRecipeCard {
  constructor(data) {
    this.data = data;

    this.section = document.querySelector(".cards_container");

    this.createCard();
    this.createIngredientList(data);
  }

  createCard() {
    // create Elements

    this.article = document.createElement("article");
    this.article.classList.add("recipes_card", "col-3", "p-0");
    this.divImg = document.createElement("div");
    this.divImg.classList.add("card_picture");
    this.div = document.createElement("div");
    this.div.classList.add("card_body");
    this.headerCard = document.createElement("div");
    this.headerCard.classList.add("card_header", "row");
    this.recipeTitle = document.createElement("h2");
    this.recipeTitle.classList.add("recipe_title", "col-6");
    this.recipeTime = document.createElement("h2");
    this.recipeTime.classList.add("time", "col-6", "text-right");
    this.cardContent = document.createElement("div");
    this.cardContent.classList.add("card_content", "row");
    this.ingredientsContainer = document.createElement("ul");
    this.ingredientsContainer.classList.add("ingredients_container", "col-6");
    this.recipe = document.createElement("p");
    this.recipe.classList.add("recipe", "col-6");

    //add Content
    this.recipeTitle.innerHTML = this.data.name;
    this.recipeTime.innerHTML = this.data.time + "min";
    this.recipe.innerHTML = this.data.description;

    // Link Elements
    this.section.appendChild(this.article);
    this.article.appendChild(this.divImg);
    this.article.appendChild(this.div);
    this.div.appendChild(this.headerCard);
    this.headerCard.appendChild(this.recipeTitle);
    this.headerCard.appendChild(this.recipeTime);
    this.div.appendChild(this.cardContent);
    this.cardContent.appendChild(this.ingredientsContainer);
    this.cardContent.appendChild(this.recipe);
  }

  // Afficher les ingrédients
  createIngredientList(data) {
    const ingredients = data.ingredients;
    //console.log(ingredients);
    ingredients.forEach((ingredient) => {
      this.ingredientsArray = [];
      this.li = document.createElement("li");
      this.li.classList.add("ingredients_list");
      this.li.innerHTML =
        ingredient.ingredient +
        " : " +
        ingredient.quantity +
        " " +
        ingredient.unit;
      this.ingredientsContainer.appendChild(this.li);
      this.ingredientsArray.push(ingredient);
    });
  }
}
