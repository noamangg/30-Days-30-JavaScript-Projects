let passwordInput = document.querySelector(".password-input");
let copyButton = document.querySelector(".copy-icon");
let passwordBtn = document.querySelector(".password-btn");



const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "!@#$%^&*(){}[]:;?><.,`";
let allSymbols = [...uppercase, ...symbols, ...numbers, ...lowercase];
allSymbols = sortSymbols(allSymbols);
passwordBtn.addEventListener("click", updatePassword);
copyButton.addEventListener("click", function(e) {
  navigator.clipboard.writeText(passwordInput.value);
})
function sortSymbols(symbols) {
  let = unorderedSymbol = symbols;
  let orderedSymbols = new Array(unorderedSymbol.length);
  let rand = generateRandom(0, unorderedSymbol.length);

  for (let i = 0; i < orderedSymbols.length; i++) {
    while (orderedSymbols.includes(unorderedSymbol[rand])) {
      unorderedSymbol = unorderedSymbol.filter((e) => e !== unorderedSymbol[rand])
      rand = generateRandom(0, unorderedSymbol.length);
    }
    orderedSymbols[i] = unorderedSymbol[rand];
  }
  return orderedSymbols;

}
function generatePassword(symbols, length) {
  let password = "";
  for (let i = 0; i < length; i++)
    password += symbols[generateRandom(0, symbols.length)];

  return password;
}
function generateRandom(min, max) {
  return Math.floor((min + Math.random()) * (max - min));
}

function updatePassword() {
  passwordInput.value = generatePassword(allSymbols, 12);
}

