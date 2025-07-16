import "./styles.css";
import { renderBoard } from "./render";
import { player, computer, setupBoards } from "./setup";

import { computerMove, playerMove } from "./gameController";

const startGameBttn = document.getElementById("startGameBtn");
const rotationBttn = document.getElementById("rotateBtn");
const turnDisplay = document.getElementById("turns");
startGameBttn.addEventListener("click", (e) => {
  playerMove();
  startGameBttn.style.display = "None";
  rotationBttn.style.display = "None";
  turnDisplay.style.display = "Block";
});

renderBoard(player, "player");
renderBoard(computer, "computer");

//playerMove();
