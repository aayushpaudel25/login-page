let input = document.getElementById("playVideo");
let video = document.getElementById("myVideo");
let video2 = document.getElementById("video2");

input.addEventListener("click", function() {
  video.style.display = "block";
  video.play();
});

document.addEventListener("click", function(event) {
  if (event.target != input) {
    video.style.display = "none";
    video2.classList.remove("hidden");
    video2.play();
  }
});