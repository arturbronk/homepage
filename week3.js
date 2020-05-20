const wordChange = "kabanos, kałasznikow";
age = 30;
const firstName = 'Artur'


const header = document.querySelector(".lesson__header--js");

console.log(header);

header.innerHTML = `A co tu się stanęło... ${wordChange}`;

console.log(header.innerHTML);

// Funkcja greetOld zapisana po staremu

function greetOld(age, firstName){
    console.log (`Witaj drogi towarzyszu ${firstName}, masz ${age} lat`);
}

greetOld(age, firstName);

// Funkcja greet zapisana jako Fat arrow function

const greet = (age, firstName) => {
    console.log (`Witaj drogi kolego ${firstName}, masz ${age} lat`);
}

greet (age, firstName);

// Funkcja calculateOld zapisana po staremu i nie rozumiem czemu nie dziala

function calculateOld(myNumber){
return myNumber*7;
}


// Funkcja calculate zapisana jako Fat arrow

const calculate = (myNumber) => myNumber*7 
const myResult = calculate(7);
console.log (`Calculate z Fat arrow to: ${myResult}`)


// const myResult = calculate(age);

// console.log(myResult);
// console.log(age);


// Funkcja pobierajaca text

function createText(querySelectorText, content) {
    const element = document.querySelector(querySelectorText);
    element.innerHTML = content;
}

createText ('.week__header--js', 'Nie kamam tego JS');