import { createPlayer } from "./player";
import { createGameBoard } from "./gameboard";
import { createBattleship } from "./ship";

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
  SHIP_TYPES.forEach((type, index) => {
    player.board.placeShip(createBattleship(type.size), 0, index, true);

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
