const button = document.querySelector(".action--js"); // pobranie buttona - stworzenie zmiennej button i przypisanie jej querySelector
console.log(button); // wypisanie co zwraca querySelector z .action--js

const Myclick = () => {
  //funkcja nazwana MyClick, która zadzieje się po kliknięciu
  console.log("kliknąłeś");

  const myHeading = document.querySelector(".week__header--js"); //zmienna MyHeading to pobrania zawartości nagłówka .week__header--js
  console.log(myHeading); //wypisanie co zwraca zmienna

  myHeading.innerHTML = "Zmiany II tygodnia w V tygodniu...czas leci:)"; //kliknięcie w przycisk wywołuje zmianę nagłówka .week__header--js
};

button.addEventListener("click", Myclick); // addEventListener

button.addEventListener("click", () => {
  //ta sama funkcja i akcja co powyżej ale zapisana w postaci strzałkowej
  const myHeading = document.querySelector(".week__header--js");
  myHeading.innerHTML = "Siedzi babcia na laweczce a dziadek tez ma kalosze!";
  myHeading.classList.toggle("klasa-z-js"); //zamienia klase .week__header--js and klasa-z-js

button.addEventListener("mouseenter", () => {
  const myHeading = document.querySelector(".week__header--js");
  myHeading.innerHTML = "Nie klikaj!";
});

button.addEventListener("mouseleave", () => {
  const myHeading = document.querySelector(".week__header--js");
  myHeading.innerHTML = "Czemu nie kliknąłeś?";
});

