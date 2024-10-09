//Parent nodes

const submit = document.getElementById("submit-btn");
console.log(submit.parentNode);
const inputField = document.querySelectorAll("input");
inputField[1].value = "orange";

for(let i = 0; i < inputField.length; i++){
    inputField[i].style.backgroundColor = "orange";
    inputField[i].style.border ="none";
}

const newElement = document.createElement("div");
newElement.className = "new-element";
newElement.id ="my-element";

const insideText = document.createTextNode("This is a new element created!");
newElement.appendChild(insideText);

console.log(newElement);

let header = document.getElementById("header");
header.appendChild(newElement);
const myHeading = document.querySelector
console.log(header)