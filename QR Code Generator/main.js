

let urlInput = document.querySelector("#url-input");
let submitInput = document.querySelector(".submit-btn");
let pupWindow = document.querySelector(".pup-up");
let regex = /^((https:\/\/)|(http:\/\/))*(www\.)*[a-z0-9]{2,256}\.[a-z0-9]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g;

let st = "https://icons8.com/icons/set/power"
pupWindow.addEventListener("click", function(e) {
  pupWindow.style.display = "none";
})

submitInput.addEventListener("click", function(e) {
  e.preventDefault();
let url = urlInput.value;
if(url.match(regex)) {
let QRurl = `https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=200x200`;
updateImg(QRurl);
}
else {
  urlInput.value = " ";
  pupWindow.style.display = "flex";
}
  // validate The URL

  // Generate the qr code

})

function updateImg(url) {
  let qrImage = document.querySelector(".qr-image");
  qrImage.src = url;
}