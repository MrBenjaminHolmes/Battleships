import { createPlayer } from "./player";
import { createGameBoard } from "./gameboard";
import { createBattleship } from "./ship";
import { renderBoard } from "./render";

const SHIP_TYPES = [
  { name: "Carrier", size: 5 },
  { name: "Battleship", size: 4 },
  { name: "Patrol Boat", size: 2 },
  { name: "Submarine", size: 3 },
  { name: "Destroyer", size: 3 },
];
const playerBoard = createGameBoard();
const computerBoard = createGameBoard();

export const player = createPlayer("Player", true, playerBoard);
export const computer = createPlayer("Computer", false, computerBoard);

export function setupBoards() {
  let currentShipIndex = 0;
  const playerBoardContainer = document.querySelector("#player"); // container of cells

  playerBoardContainer.addEventListener("click", (e) => {
    const cell = e.target;
    if (!cell.classList.contains("cell")) return;
    if (currentShipIndex >= SHIP_TYPES.length) {
      console.log("All ships placed");
      return;
    }

    const x = Number(cell.dataset.x);
    const y = Number(cell.dataset.y);
    const shipType = SHIP_TYPES[currentShipIndex];
    const ship = createBattleship(shipType.size);

    const placed = player.board.placeShip(ship, x, y, true);

    if (placed) {
      renderBoard(player, "player");
      currentShipIndex++;
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
