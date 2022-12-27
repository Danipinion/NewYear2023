let launchDate = new Date("dec 25, 2022 08:01:00").getTime();
let timer = setInterval(tick, 1000);

function cetakTime(D, H, M, S) {
  if (D < 10) {
    D = "0" + D;
  }
  if (H < 10) {
    H = "0" + H;
  }
  if (M < 10) {
    M = "0" + M;
  }
  if (S < 10) {
    S = "0" + S;
  }
  let time = `${D} : ${H} : ${M} : ${S}`;
  document.querySelector(".countdown").innerText = time;
}

function tick() {
  let now = new Date().getTime();
  let t = launchDate - now;
  if (t > 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    if (secs < 1) {
      document.getElementById("demo").textContent = "Klik Here";
      document.getElementById("demo").classList.remove("disable");
    }
  }
}

function show() {
  const count = document.querySelectorAll(".count");
  let i = 1;
  let is = 0;
  function frame() {
    if (i == 3) {
      clearInterval(id);
    }
    count[is].classList.replace("show", "hidden");
    count[i].classList.replace("hidden", "show");
    i++;
    is++;
  }
  const id = setInterval(frame, 2000);
}
show();
const btn = document.querySelector(".btn");
setTimeout(() => {
  btn.classList.remove("hidden");
}, 8000);
const video = document.querySelector("video");
btn.addEventListener("click", () => {
  const count = document.querySelectorAll(".count");
  const titleA = document.querySelectorAll("#container h1");
  const can = document.querySelector("#Canvas");
  const te = document.querySelector("#text");
  const audio = document.querySelector("audio");
  const text = document;
  video.play();
  setTimeout(() => {
    audio.play();
  }, 33000);
  btn.style.opacity = "0";
  btn.style.zIndex = "-1";
  setTimeout(() => {
    count[3].style.opacity = "0";
    count[3].style.zIndex = "-1";
    titleA[0].classList.remove("hidden");
    setTimeout(() => {
      titleA[1].classList.remove("hidden");
    }, 4000);
    setTimeout(() => {
      can.classList.remove("hidden");
      titleA[0].style.display = "none";
      titleA[1].style.display = "none";
    }, 8000);
    setTimeout(() => {
      count[4].classList.replace("hidden", "show");
    }, 10000);
  }, 24500);
});
