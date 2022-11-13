const selectBox = document.querySelector(".select-box"),
  start = document.getElementById("start"),
  playBoard = document.querySelector(".play-board"),
  allBox = document.querySelectorAll("section span"),
  players = document.querySelector(".players");

window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }
};

start.onclick = () => {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
};

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";

function clickedBox(element) {
  //if() {
  //}
}
