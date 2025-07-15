import "./styles.css";
import { createBattleship } from "./ship";
import { createPlayer } from "./player";
import { createGameBoard } from "./gameboard";
//Declare Ship Types
const SHIP_TYPES = [
  { name: "Carrier", size: 5 },
  { name: "Battleship", size: 4 },
  { name: "Patrol Boat", size: 2 },
  { name: "Submarine", size: 3 },
  { name: "Destroyer", size: 3 },
];

function computerMove() {
  const playerCells = Array.from(document.querySelectorAll(".cell.player"));

  // Pick random coordinates until finding one that hasn't been attacked yet
  let x, y, cell, alreadyAttacked;
  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);

    alreadyAttacked =
      playerBoard.hits.some(([hx, hy]) => hx === x && hy === y) ||
      playerBoard.missedAttacks.some(([mx, my]) => mx === x && my === y);
  } while (alreadyAttacked);

  cell = playerCells.find(
    (cell) => Number(cell.dataset.x) === x && Number(cell.dataset.y) === y
  );

  const hit = playerBoard.receiveAttack(x, y);

  if (hit) {
    cell.classList.add("hit");
  } else {
    cell.classList.add("miss");
  }

  if (playerBoard.allSunk()) {
    alert("COMPUTER WINS");
  }

  PlayerTurn = true; // Give turn back to player
}
function renderBoard(player, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";
  if (player.isHuman === true) {
    player.board.board.forEach((row, y) => {
      row.forEach((cell, x) => {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.classList.add("player");

        if (cell) {
          cellDiv.classList.add("ship");
        }
        cellDiv.dataset.x = x;
        cellDiv.dataset.y = y;

        container.appendChild(cellDiv);
      });
    });
  } else {
    player.board.board.forEach((row, y) => {
      row.forEach((cell, x) => {
        const cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.classList.add("computer");

        if (cell) {
          cellDiv.classList.add("ship");
        }
        cellDiv.dataset.x = x;
        cellDiv.dataset.y = y;

        container.appendChild(cellDiv);
      });
    });
  }
}
const playerBoard = createGameBoard();
const enemyBoard = createGameBoard();

const player = createPlayer("Ben", true, playerBoard);
const computer = createPlayer("AI", false, enemyBoard);

SHIP_TYPES.forEach((type, index) => {
  playerBoard.placeShip(createBattleship(type.size), 0, index, true);
  enemyBoard.placeShip(createBattleship(type.size), 0, index, true);
});
renderBoard(player, "player");
renderBoard(computer, "computer");
let PlayerTurn = true;

const computerCells = Array.from(document.querySelectorAll(".cell.computer"));
computerCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    if (!PlayerTurn) {
      return;
    }

    const x = Number(cell.dataset.x);
    const y = Number(cell.dataset.y);

    const alreadyAttacked =
      enemyBoard.hits.some(([hx, hy]) => hx === x && hy === y) ||
      enemyBoard.missedAttacks.some(([mx, my]) => mx === x && my === y);

    if (alreadyAttacked) {
      return; // or false – depends on how you want to handle
    }

    const hit = enemyBoard.receiveAttack(cell.dataset.x, cell.dataset.y);
    cell.classList.add(hit ? "hit" : "miss");

    //Check Win
    if (enemyBoard.allSunk()) {
      alert("YOU WIN");
    }

    PlayerTurn = false;
    setTimeout(() => {
      computerMove();
    }, 500);
  });
});
