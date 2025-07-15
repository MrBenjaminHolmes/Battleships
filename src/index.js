import "./styles.css";
import { renderBoard } from "./render";
import { player, computer } from "./setup";
import { computerMove, playerMove } from "./gameController";
//Declare Ship Types

renderBoard(player, "player");
renderBoard(computer, "computer");

playerMove();
