
let calculatorApp = document.createElement("div");
let container = document.querySelector(".container")
let numbers = document.createElement("div");
numbers.classList.add("numbers");
let number = document.createElement("input");
number.type = "button";
console.log(number);
for(let i = 9; i >=1 ; i--) {
  number.value = i;
  number.textContent = `${i}`;
  numbers.appendChild(number.cloneNode(true));
}
container.appendChild(numbers);