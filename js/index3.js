// console.log("File is Connected");

const sections = document.getElementsByTagName("section");
// console.log(sections);

const section = document.querySelectorAll("section");
// console.log(section);

for (const sec of section) {
  console.log(sec);
  //   sec.style.backgroundColor = "blue";
  //   sec.style.border = "2px solid black";
  //   sec.style.marginBottom = "10px";
  //   sec.style.borderRadius = "10px";
  //   sec
  // .style.color = "white";
}

// Dynamic Class
// for (let sec of section) {
//   sec.classList.add("section_card");
// }

const jambura = document.getElementsByClassName("jambura");
console.log(jambura);
for (let jam of jambura) {
  jam.classList.add("jambura");
}

//Seeing how to apply the child node
const players =
  document.getElementById("players_container").childNodes[3].childNodes;
console.log(players);

//Application of the parent Node getting the parent node
const player =
  document.getElementById("players_container").parentNode.parentNode;
console.log(player);

// Creating an Element
const newChild = document.createElement("li");
newChild.innerText = "Hellow Beautiful World";
// console.log(newChild);

// finding the parent where i will add the child
const playerList = document.getElementById("players_list");
console.log(playerList);

// append the child to the parent
playerList.appendChild(newChild);
