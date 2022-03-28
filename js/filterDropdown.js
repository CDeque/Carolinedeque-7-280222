//////////////////////////////////////////////
// mise en place du tri dans les dropdowns //
////////////////////////////////////////////

export function dropdownFilterSearch() {
  const inputs = document.querySelectorAll(".search");
  const allElementsLists = document.querySelectorAll(
    ".ing_list,.appli_list, .ust_list"
  );
  const dropdownBtn = document.querySelectorAll(".dropdown_btn");
  // récupération de chaque input et de sa valeur
  inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
      const searchbarValue = e.target.value.toLowerCase();

      // pour chaque éléments on vérifie si la valeur correspond à un élément de la liste et une recette
      allElementsLists.forEach((element) => {
        // si oui on les affiche, non on les masque
        if (element.innerHTML.toLowerCase().match(searchbarValue)) {
          element.style.display = "flex";
        } else {
          element.style.display = "none";
        }
        // Pour afficher les elements dans les autres dropdown lorsque l'on clique dessus
        dropdownBtn.forEach((btn) => {
          btn.addEventListener("focus", () => {
            element.style.display = "flex";
          });
        });
      });
    });
  });
}
