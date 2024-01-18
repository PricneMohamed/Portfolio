let sun = document.querySelector(".sun");
let light = 0;
sun.addEventListener("click", function () {
  if (light == 0) {
    document.body.style.background = "#fff";
    sun.style.color = "#000";
    light = 1;
  } else if (light == 1) {
    document.body.style.background = "#000";
    sun.style.color = "#fff";
    light = 0;
  }
});
