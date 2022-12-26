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
    console.log("🚀 ~ file: script.js:21 ~ tick ~ secs", secs);
    cetakTime(days, hours, mins, secs);
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
}, 6000);
const video = document.querySelector("video");
btn.addEventListener("click", () => {
  const count = document.querySelectorAll(".count");
  video.play();
  btn.classList.add("hidden");
  setTimeout(() => {
    count[3].classList.replace("show", "hidden");
  }, 25000);
});
