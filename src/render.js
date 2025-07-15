export function renderBoard(player, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  player.board.board.forEach((row, y) => {
    row.forEach((cell, x) => {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell", player.isHuman ? "player" : "computer");

      if (cell) {
        cellDiv.classList.add("ship");
      }

      cellDiv.dataset.x = x;
      cellDiv.dataset.y = y;

      container.appendChild(cellDiv);
    });
  });
}

export function renderBoards(player, computer) {
  renderBoard(player, "player");
  renderBoard(computer, "computer");
}
