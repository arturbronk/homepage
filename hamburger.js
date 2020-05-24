const hamburger = document.querySelector(".hamburger--js"); //pobieramy nasz przycisk hamburgera za pomocą querySelectora
console.log(hamburger);

hamburger.addEventListener('click', () => {              // do hamburgera przypinamy EventListener na kliknięcie, który wywoła funkcję
const nav = document.querySelector('.navigation--js');      // funkcja pobiera navigację za pomocą querySelector
nav.classList.toggle('navigation--open');               // i zmieniamy mu klasę na navigation--open. Jeśli ma to klasę to usunie, jeśli nie to doda.
});