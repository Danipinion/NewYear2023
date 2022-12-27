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
  const con = document.querySelector("#container");
  const titleA = document.querySelectorAll("#container h1");
  const can = document.querySelector("#Canvas");
  const audio = document.querySelector("audio");
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
      setTimeout(() => {
        can.style.opacity = "0";
        can.style.zIndex = "-1";
        can.remove();
        audio.remove();
      }, 20000);
      setTimeout(() => {
        con.style.opacity = "0";
        con.style.zIndex = "-1";
      }, 15000);
    }, 10000);
  }, 24500);
});
