let seconds = 0;
let minutes = 0;
let hours = 0;
let addZeroes = (n) => (+n < 10 ? `0${n}` : `${n}`);
let timer;

let stopBtn = document.querySelector(".btn-stop");
let playBtn = document.querySelector(".btn-play");
let resetBtn = document.querySelector(".btn-reset");


playBtn.addEventListener('click', function (e) {
  if (playBtn.classList.contains("fa-play"))
    startTimer();
  else if (playBtn.classList.contains("fa-pause")) {
    stopTimer();
    clearTimer();
  }
  playBtn.classList.toggle("fa-play");
  playBtn.classList.toggle("fa-pause");
});
stopBtn.addEventListener('click', function(e) {
  stopTimer();
  if(playBtn.classList.contains("fa-pause")) {
  playBtn.classList.add("fa-play");
  playBtn.classList.remove("fa-pause");
  }

});



resetBtn.onclick = function (e) {
  clearTimer();
}

function startTimer() {
  stopTimer();
  timer = setInterval((e) => {
    seconds++;
    if (seconds >= 60) {
      minutes++;
      seconds = 0;
      if (minutes >= 60) {
        hours++;
        minutes = 0;
      }
    }
    updateTimer(seconds, minutes, hours);
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function updateTimer(s, m, h) {
  let secondsSpan = document.querySelector(".seconds");
  let minutesSpan = document.querySelector(".minutes");
  let hoursSpan = document.querySelector(".hours");

  secondsSpan.textContent = addZeroes(s);
  minutesSpan.textContent = addZeroes(m);
  hoursSpan.textContent = addZeroes(h);
}
function clearTimer() {
  let secondsSpan = document.querySelector(".seconds");
  let minutesSpan = document.querySelector(".minutes");
  let hoursSpan = document.querySelector(".hours");

  seconds = 0;
  minutes = 0;
  hours = 0;

  secondsSpan.textContent = '00';
  minutesSpan.textContent = '00';
  hoursSpan.textContent = '00';
}

