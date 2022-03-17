export class UstensilsDropdown {
  constructor() {
    this.section = document.querySelector(".filters_container");

    this.createdropdown();
    this.activeDropdown();
    this.closeDropdown();
  }
  createdropdown() {
    this.section.classList.add("row", "mx-5", "my-3");
    this.filter = document.createElement("div");
    this.filter.classList.add("filter", "col-3", "p-0");
    this.div = document.createElement("div");
    this.div.classList.add("filter_div");
    this.ul = document.createElement("ul");
    this.ul.classList.add("ustensiles_options_container");
    this.dropdownBtn = document.createElement("button");
    this.dropdownBtn.classList.add(
      "dropdown_btn",
      "ustensiles",
      "mr-1",
      "pt-1"
    );
    this.dropdownBtn.innerHTML = "Ustensiles";
    this.input = document.createElement("input");
    this.input.classList.add("search", "search_ustensiles");
    this.input.placeholder = "Rechercher un ustensile...";
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

      this.ul.style.display = "flex";
      this.input.style.display = "flex";
      this.input.focus();
    });
  }
  // Pour fermer le dropdown en choisissant une option ou lorsque l'on clique sur la fenetre
  closeDropdown() {}
}
