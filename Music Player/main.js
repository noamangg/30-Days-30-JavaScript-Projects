let musicPlayer = document.querySelector("#music-player");
let progress = document.querySelector("#progress");
let playIcon = document.querySelector(".play-icon");

musicPlayer.onloadedmetadata = function () {
  progress.max = musicPlayer.duration;
  progress.value = musicPlayer.currentTime;
}
console.log(musicPlayer.duration)
console.log(musicPlayer.currentSec)

function playPause() {
  if (playIcon.classList.contains("fa-play"))
    musicPlayer.play();
  else if (playIcon.classList.contains("fa-pause"))
    musicPlayer.pause();

  playIcon.classList.toggle("fa-play");
  playIcon.classList.toggle("fa-pause");

}

if(musicPlayer.play()) {
  setInterval(() => {
    progress.value = musicPlayer.currentTime;
  }, 50000);
}

progress.onchange = function(e) {
  musicPlayer.currentTime = progress.value;
  musicPlayer.play();
  playIcon.classList.add("fa-pause");
  playIcon.classList.remove("fa-play");
}