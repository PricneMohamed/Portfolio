let sun = document.querySelector(".sun");
let h1_name = document.querySelector(".h1_name");
let conter_h2 = document.querySelector(".conter_h2");
let btn_about = document.querySelector(".btn_about");
let ico = document.querySelectorAll(".ico");
let light = 0;
sun.addEventListener("click", function () {
  if (light == 0) {
    document.body.style.background = "#fff";
    sun.style.color = "#000";
    h1_name.style.color = "#000";
    conter_h2.style.color = "#000";
    btn_about.style.color = "#000";
    ico.forEach(function(ele){
      ele.style.color = "#000";
    })   
    light = 1;
  } else if (light == 1) {
    document.body.style.background = "#000";
    sun.style.color = "#fff";
    h1_name.style.color = "#fff";
    conter_h2.style.color = "#fff";
    btn_about.style.color = "#fff";
    ico.forEach(function(ele){
      ele.style.color = "#fff";
    })
    light = 0;
  }
});

let sp_text = "I'M Mohamed Hanafi.";
let span = document.querySelector(".name")
let index = 1

function reWrite(){
  let reSpan = sp_text.slice(0,index)
  span.innerHTML = `${reSpan} |`
  index++
}

setInterval(reWrite,200)

