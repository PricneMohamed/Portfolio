let bars = document.querySelector(".bars");
let barrs = document.querySelector(".barrs");
let x = document.querySelector(".x");

bars.onclick = function(){
    barrs.style.transform = "translate(0)"
}
x.onclick = function(){
    barrs.style.transform = "translate(-2000px)"
}
