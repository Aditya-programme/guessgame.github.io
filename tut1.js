var guessValue = document.querySelector(".guess");
let inputvalue = document.querySelector("#input");
const win = document.getElementById("change");
const buttons = document.getElementById("btn");

let gen = Math.floor(Math.random() * 10 + 1);
guessValue.textContent = gen;

function checking() {
  guessValue.style.visibility = "visible";
  let guess = parseInt(inputvalue.value);
  if (guess != gen) {
    win.innerHTML = "YOU LOSE";
  } else {
    win.innerHTML = "YOU Win";
  }
}
buttons.addEventListener("click", checking);
