export class AppliancesDropdown {
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
      "appliances_options_container",
      "container",
      "row",
      "px-0"
    );
    this.ul.style.display = "none";

    this.dropdownBtn = document.createElement("button");
    this.dropdownBtn.classList.add("dropdown_btn", "devices", "mr-1", "pt-1");
    this.dropdownBtn.innerHTML = "Appareils";
    this.inputContainer = document.createElement("div");
    this.inputContainer.classList.add("input_container");
    this.input = document.createElement("input");
    this.input.placeholder = "Rechercher un appareil...";
    this.input.classList.add("search", "search_devices");
    this.input.type = "text";
    this.input.name = "appliances";
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
  //Pour afficher la liste d'ingrédients et supprimer les doublons
  displayDropdownData(data) {
    const items = data;
    let appliancesArray = [];

    // Pour afficher les ingredients dans l'ul

    items.forEach((item) => {
      appliancesArray.push(item.appliance.toLowerCase());
    });

    //on filtre le tableau pour supprimer les doublons
    const filteredAppliances = appliancesArray.filter(
      (el, pos) => appliancesArray.indexOf(el) === pos
    );

    // creation de la liste d'appareils
    filteredAppliances.forEach((appliance) => {
      this.li = document.createElement("li");
      this.li.classList.add("appli_list", "col-4");
      this.li.innerHTML =
        appliance.charAt(0).toUpperCase() +
        appliance.substring(1).toLowerCase();
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
