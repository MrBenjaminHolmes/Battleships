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

const playerContainer = document.getElementById("player");
const computerContainer = document.getElementById("computer");

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

const computerCells = Array.from(document.querySelectorAll(".cell.computer"));
computerCells.forEach((cell) => {
  cell.addEventListener("click", () => {
    const hit = enemyBoard.receiveAttack(cell.dataset.x, cell.dataset.y);
    if (hit) {
      cell.classList.add("hit");
    } else {
      cell.classList.add("miss");
    }
  });
});
