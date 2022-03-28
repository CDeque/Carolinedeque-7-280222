export class UstensilsDropdown {
  constructor(data) {
    this.data = data;
    this.section = document.querySelector(".filters_section");

    this.createdropdown();
    this.displayDropdownData(data);
    this.activeDropdown();
    this.closeDropdown();
  }
  createdropdown() {
    this.section.classList.add("row");
    this.filter = document.createElement("div");
    this.filter.classList.add("filter", "col-2", "p-0");
    this.div = document.createElement("div");
    this.div.classList.add("filter_div");
    this.ul = document.createElement("ul");
    this.ul.classList.add(
      "ustensiles_options_container",
      "container",
      "row",
      "px-0"
    );
    this.ul.style.display = "none";

    this.dropdownBtn = document.createElement("button");
    this.dropdownBtn.classList.add(
      "dropdown_btn",
      "ustensiles",
      "mr-1",
      "pt-1"
    );
    this.dropdownBtn.innerHTML = "Ustensiles";
    this.input = document.createElement("input");
    this.inputContainer = document.createElement("div");
    this.inputContainer.classList.add("input_container");
    this.input.classList.add("search", "search_ustensiles");
    this.input.placeholder = "Rechercher un ustensile...";
    this.input.type = "text";
    this.input.name = "ustensils";
    this.arrowDown = document.createElement("img");
    this.arrowDown.classList.add("arrow_down");
    this.arrowDown.src = "medias/arrow_down.png";
    this.arrowUp = document.createElement("img");
    this.arrowUp.classList.add("arrow_up");
    this.arrowUp.src = "medias/arrow_up.png";
    this.section.appendChild(this.filter);
    this.filter.appendChild(this.div);
    this.div.appendChild(this.dropdownBtn);
    this.dropdownBtn.appendChild(this.arrowDown);
    this.div.appendChild(this.ul);
    this.ul.appendChild(this.inputContainer);
    this.inputContainer.appendChild(this.input);
    this.inputContainer.appendChild(this.arrowUp);
  }

  displayDropdownData(data) {
    const items = data;
    let ustensilsArray = [];

    // Pour afficher les ingredients dans l'ul
    items.forEach((item) =>
      item.ustensils.forEach((ustensil) => {
        ustensilsArray.push(ustensil.toLowerCase());
      })
    );

    // Pour supprimer les doublons
    const filteredUstensils = ustensilsArray.filter(
      (el, pos) => ustensilsArray.indexOf(el) === pos
    );

    // creation de la liste d'appareils
    filteredUstensils.forEach((ustensil) => {
      this.li = document.createElement("li");
      this.li.classList.add("ust_list", "col-4");
      this.li.innerHTML =
        ustensil.charAt(0).toUpperCase() + ustensil.substring(1).toLowerCase();
      this.ul.appendChild(this.li);
    });
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
  closeDropdown() {
    this.arrowUp.addEventListener("click", () => {
      this.dropdownBtn.classList.remove("active");
      this.ul.style.display = "none";
    });
  }
}
