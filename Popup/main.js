let closeBtn = document.querySelector(".close-btn");
let popupBox = document.querySelector(".popup-box");

let submitBtn = document.querySelector(".submit-btn");

closeBtn.addEventListener("click", function(e) {
  popupBox.classList.remove("popup-box-sub");
})

submitBtn.addEventListener("click", function(e) {
  popupBox.classList.add("popup-box-sub");
})