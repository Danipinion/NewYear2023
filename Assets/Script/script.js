let launchDate = new Date("dec 28, 2022 05:57:00").getTime();
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
const frame = document.getElementById("frame");

function tick() {
  let now = new Date().getTime();
  let t = launchDate - now;
  if (t > 0) {
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let mins = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let secs = Math.floor((t % (1000 * 60)) / 1000);
    cetakTime(days, hours, mins, secs);
  }
  if (t < 0) {
    clearInterval(timer);
    frame.classList.remove("hidden");
  }
}
