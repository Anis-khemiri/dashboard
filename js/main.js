let section = document.querySelector(".targets");
let spans = document.querySelectorAll(".progress span");

let mysection = document.querySelector(".tickets");
let myspans = document.querySelectorAll(".tickets .box span");
console.log(myspans)
let started = false;
window.onscroll = function() {
if(window.scrollY > section.offsetTop){
    console.log("hi");
    spans.forEach((span) => {
        span.style.width = span.dataset.width;
      });
}




    if(window.scrollY > mysection.offsetTop){
        if (!started) {
            myspans.forEach((span) => startCount(span));
          }
          started = true;
    }
}
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
        clearInterval(count);
      }
    }, 2000 / goal);
  }

