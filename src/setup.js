import { createPlayer } from "./player";
import { createGameBoard } from "./gameboard";
import { createBattleship } from "./ship";
import { playerMove } from "./gameController";
import { renderBoard } from "./render";

const SHIP_TYPES = [
  { name: "Carrier", size: 5 },
  { name: "Battleship", size: 4 },
  { name: "Patrol Boat", size: 2 },
  { name: "Submarine", size: 3 },
  { name: "Destroyer", size: 3 },
];

const startGameBttn = document.getElementById("startGameBtn");
const placeHeading = document.getElementById("placeHeading");
const playerBoard = createGameBoard();
const computerBoard = createGameBoard();

export const player = createPlayer("Player", true, playerBoard);
export const computer = createPlayer("Computer", false, computerBoard);

export function setupBoards() {
  let currentShipIndex = 0;
  let rotation = true;
  const playerBoardContainer = document.querySelector("#player");
  playerBoardContainer.addEventListener("mouseover", (e) => {
    const cell = e.target;
    if (!cell.classList.contains("cell")) return;
    if (currentShipIndex >= SHIP_TYPES.length) return;

    const x = Number(cell.dataset.x);
    const y = Number(cell.dataset.y);
    const shipType = SHIP_TYPES[currentShipIndex];
    const length = shipType.size;

    for (let i = 0; i < length; i++) {
      const cellX = rotation ? x + i : x;
      const cellY = rotation ? y : y + i;

      const previewCell = document.querySelector(
        `.cell[data-x="${cellX}"][data-y="${cellY}"]`
      );
      if (previewCell) previewCell.classList.add("preview");
    }
  });

  playerBoardContainer.addEventListener("mouseout", (e) => {
    document.querySelectorAll(".cell.preview").forEach((cell) => {
      cell.classList.remove("preview");
    });
  });
  const rotationBttn = document.getElementById("rotateBtn");
  rotationBttn.addEventListener("click", () => {
    rotation = !rotation;
    console.log(rotation);
  });
  playerBoardContainer.addEventListener("click", (e) => {
    if (currentShipIndex >= SHIP_TYPES.length) return;

    const cell = e.target;
    if (!cell.classList.contains("cell")) return;

    const x = Number(cell.dataset.x);
    const y = Number(cell.dataset.y);
    const shipType = SHIP_TYPES[currentShipIndex];
    const ship = createBattleship(shipType.size);

    const placed = player.board.placeShip(ship, x, y, rotation);

    if (placed) {
      renderBoard(player, "player");
      currentShipIndex++;

      if (currentShipIndex >= SHIP_TYPES.length) {
        startGameBttn.disabled = false;
        placeHeading.style.display = "None";

        playerBoardContainer.style.pointerEvents = "none";
      }
    } else {
    }
  });

  SHIP_TYPES.forEach((type) => {
    let placed = false;
    while (!placed) {
      const x = Math.floor(Math.random() * computer.board.size);
      const y = Math.floor(Math.random() * computer.board.size);
      const horizontal = Math.random() < 0.5;

      placed = computer.board.placeShip(
        createBattleship(type.size),
        x,
        y,
        horizontal
      );
    }
  });
}

setupBoards();
