
let calculatorApp = document.createElement("div");
let buttonContainer = document.querySelector(".button-container")
let inputFiled = document.querySelector("#input-filed");
console.log(inputFiled.textContent);
let operators = ['/', '*', '-', '+', '=']
let numbers = ["C", "+/-", "%", 7, 8, 9, 4, 5, 6, 1, 2, 3, 0, '.']
buttonContainer.appendChild(createNumbers(numbers, ["numbers-box", "box"]));
buttonContainer.appendChild(createNumbers(operators, ["operators-box", "box"]));

function createNumbers(arr, className) {
  let numbers = document.createElement("div");
  numbers.classList.add(...className);
  for (let i = 0; i < arr.length; i++) {
    let number = document.createElement("input");
    number.type = "button";
    number.value = arr[i];
    number.textContent = arr[i];
    number.addEventListener("click", function () {
      if (number.value === "C")
        inputFiled.value = "";
      else if (number.value !== "+/-" && number.value !== '=')
        inputFiled.value += arr[i];
    })
    numbers.appendChild(number);
  }
  return numbers
}
