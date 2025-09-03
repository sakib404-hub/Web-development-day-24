// console.log("I am Here");
// console.log("I will be Going to the university as a professor someday");
// console.log("Tomorrow our summer2025 result will be published");
// console.log(document);
// console.log(document.title);

// const student = {
//   name: "Sakib Hossen",
//   id: 40,
// };

// console.log(student.name);
// console.log(student.id);

// Get Element By id
const favoriteTitle = document.getElementById("food-title");
console.log(favoriteTitle);
console.log(favoriteTitle.innerText);

const favoFood = document.getElementById("pasta");
favoFood.innerText = "I  do not like pasta i like only nachos";

// get element by the class Name

const foreignFood = document.getElementsByClassName("foreign");
console.log(foreignFood);
for (let i of foreignFood) {
  //   i.innerText = "Nachos";
  //   console.log(i.innerText);
}

const selectionFromComplex = document.querySelectorAll("#puran-dhaka #pasta");
for (let element of selectionFromComplex) {
  console.log(element.innerText);
}

// get element by id
const title = document.getElementById("food-title");
console.log(title.innerText);
title.innerText = "Food that i love Forever";
console.log(title.innerText);
title.style.color = "red";
title.style.color = "yellow";
title.style.color = "green";
// getting which property is in that particular color
console.log(title.style.color);

//Therefore changing the background color with the help of DOM and js
title.style.backgroundColor = "lightGreen";
title.style.border = "2px solid black";
title.style.borderRadius = "10px";
title.style.padding = "10px";
// console.log(title.classList);

// working with the players section
// console.log(document.getElementById("players-container").innerText);
const players = document.getElementById("players-container");
console.log(players.innerHTML);
// players.innerText = "Tom";

players.innerHTML = "<li>My Random Styling </li>"; // the  full section is changed to this
