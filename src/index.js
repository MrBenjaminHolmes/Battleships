import "./styles.css";
import { renderBoard } from "./render";
import { player, computer, setupBoards } from "./setup";

import { computerMove, playerMove } from "./gameController";

const startGameBttn = document.getElementById("startGameBtn");

startGameBttn.addEventListener("click", (e) => {
  playerMove();
});

renderBoard(player, "player");
renderBoard(computer, "computer");

//playerMove();
