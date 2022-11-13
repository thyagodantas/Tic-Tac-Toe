const selectBox = document.querySelector(".select-box");
start = selectBox.querySelector("button[id='start']");
playBoard = document.querySelector(".play-board");

let turnPlayer = "";

function updateTitle() {
  const getXplayer = document.getElementById("player1");
  const getOplayer = document.getElementById("player2");
  let xPlayer = document.getElementById("xPlayer");
  xPlayer.innerText = getXplayer.value;
  let OPlayer = document.getElementById("oPlayer");
  OPlayer.innerText = getOplayer.value;
}

updateTitle;
window.onload = () => {
  //window loaded
  start.onclick = () => {
    selectBox.classList.add("hide"); // 'hide' do menu de informações
    playBoard.classList.add("show"); // 'show' do menu do game
  };
};
