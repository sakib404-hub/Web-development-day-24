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
