import { player, computer } from "./setup";

let PlayerTurn = true;

export function computerMove() {
  const playerCells = Array.from(document.querySelectorAll(".cell.player"));
  let x, y, cell, alreadyAttacked;

  do {
    x = Math.floor(Math.random() * 10);
    y = Math.floor(Math.random() * 10);

    alreadyAttacked =
      player.board.hits.some(([hx, hy]) => hx === x && hy === y) ||
      player.board.missedAttacks.some(([mx, my]) => mx === x && my === y);
  } while (alreadyAttacked);

  cell = playerCells.find(
    (cell) => Number(cell.dataset.x) === x && Number(cell.dataset.y) === y
  );

  const hit = player.board.receiveAttack(x, y);
  cell.classList.add(hit ? "hit" : "miss");

  if (player.board.allSunk()) {
    alert("COMPUTER WINS");
  }

  PlayerTurn = true;
}

export function playerMove() {
  const computerCells = Array.from(document.querySelectorAll(".cell.computer"));

  computerCells.forEach((cell) => {
    cell.addEventListener("click", () => {
      if (!PlayerTurn) return;

      const x = Number(cell.dataset.x);
      const y = Number(cell.dataset.y);

      const alreadyAttacked =
        computer.board.hits.some(([hx, hy]) => hx === x && hy === y) ||
        computer.board.missedAttacks.some(([mx, my]) => mx === x && my === y);

      if (alreadyAttacked) return;

      const hit = computer.board.receiveAttack(x, y);
      cell.classList.add(hit ? "hit" : "miss");

      if (computer.board.allSunk()) {
        alert("YOU WIN");
      }

      PlayerTurn = false;
      setTimeout(computerMove, 500);
    });
  });
}
