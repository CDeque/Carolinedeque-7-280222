export class IngredientsDropdown {
  constructor() {
    this.section = document.querySelector(".filters_container");

    this.createdropdown();
    this.activeDropdown();
    this.closeDropdown();
    this.addList();
  }
  createdropdown() {
    this.section.classList.add("row", "mx-5", "my-3");
    this.filter = document.createElement("div");
    this.filter.classList.add("filter", "col-3", "p-0");
    this.div = document.createElement("div");
    this.div.classList.add("filter_div");
    this.ul = document.createElement("ul");
    this.ul.classList.add("ingredients_options_container");
    this.dropdownBtn = document.createElement("button");
    this.dropdownBtn.classList.add(
      "dropdown_btn",
      "ingredients",
      "mr-1",
      "pt-1"
    );
    this.dropdownBtn.textContent = "Ingrédients";
    this.input = document.createElement("input");
    this.input.classList.add("search", "search_ingredient");
    this.input.placeholder = "Rechercher un ingrédient...";
    this.arrowIcon = document.createElement("img");
    this.arrowIcon.classList.add("arrow_icon");
    this.arrowIcon.src = "medias/arrow_dropdown.png";

    this.section.appendChild(this.filter);
    this.filter.appendChild(this.div);
    this.div.appendChild(this.dropdownBtn);
    this.dropdownBtn.appendChild(this.arrowIcon);
    this.div.appendChild(this.ul);
    this.ul.appendChild(this.input);
  }
  // Pour activer le dropdown et rendre actif l'input de recherche
  activeDropdown() {
    this.dropdownBtn.addEventListener("click", (e) => {
      e.preventDefault();
      this.ul.classList.toggle("active");
      this.ul.style.display = "flex";
      this.input.style.display = "flex";
      this.input.focus();
    });
  }
  // Pour fermer le dropdown en choisissant une option ou lorsque l'on clique sur la fenetre
  closeDropdown() {
    if (this.ul.classList.contains("active")) {
      console.log(this.ul.classList.contains("active"));
      window.addEventListener("click", (e) => {
        e.preventDefault();
        this.ul.classList.remove("active");
        this.ul.style.display = "none";
        this.input.style.display = "none";
      });
    }
  }
  // Pour ajouter la liste des ingredients
  addList() {}
}
