//Parent nodes

const submit = document.getElementById("submit-btn");
console.log(submit.parentNode);
const inputField = document.querySelectorAll("input");
inputField[1].value = "orange";

for(let i = 0; i < inputField.length; i++){
    inputField[i].style.backgroundColor = "orange";
    inputField[i].style.border ="none";
}
