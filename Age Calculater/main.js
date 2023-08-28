let inputF = document.querySelector("input[type='date']");
inputF.max = new Date().toISOString().split("T")[0]
let todayDate = new Date();
let dateIn = inputF.value.split("-");

let yearsSpan = document.querySelector(".years");
let monthsSpan = document.querySelector(".months");
let daysSpan = document.querySelector(".days");
let mainP = document.querySelector(".main-title");

mainP.style.visibility = 'hidden';

function clcAge() {
  let todayDate = new Date();
  let dateIn = inputF.value.split("-");


  let years = todayDate.getFullYear() - dateIn[0];
  yearsSpan.textContent = years;

  let months;
  if (todayDate.getMonth() >= dateIn[1])
    months = todayDate.getMonth() - dateIn[1] + 1;
  else {
    months = 12 + todayDate.getMonth() - dateIn[1];
    years--;
  }
  monthsSpan.textContent = months;


  let days;
  if (todayDate.getDate() >= dateIn[2])
    days = todayDate.getDate() - dateIn[2];
  else {
    months--;
    days = getDaysInMonth(dateIn[0], dateIn[1]) + todayDate.getDate() - dateIn[2]
  }

  daysSpan.textContent = days;

  mainP.style.visibility = 'visible';

}
function getDaysInMonth(year,month) {
  return new Date(year, month,0).getDate();
}