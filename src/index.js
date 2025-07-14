import "./styles.css";
const playerContainer = document.getElementById("player");
function createBattleship(size) {
  return {
    size,
    hits: 0,
    hit() {
      this.hits++;
    },
    isSunk() {
      return this.hits >= this.size;
    },
  };
}

function createGameBoard() {
  const ships = [];
  const misses = [];
  const board = Array(10)
    .fill(null)
    .map(() => Array(10).fill(null));

  function placeShip(ship, startX, startY, isHorizontal = true) {
    for (let i = 0; i < ship.size; i++) {
      const x = isHorizontal ? startX + i : startX;
      const y = isHorizontal ? startY : startY + i;

      if (x < 0 || x >= 10 || y < 0 || y >= 10) return false;
      if (board[y][x] !== null) return false;
    }
    for (let i = 0; i < ship.size; i++) {
      const x = isHorizontal ? startX + i : startX;
      const y = isHorizontal ? startY : startY + i;
      board[y][x] = ship;
    }
    ships.push(ship);
    return true;
  }

  function receiveAttack(x, y) {
    const target = board[y][x];
    if (target !== null) {
      target.hit();
    } else {
      misses.push([x, y]);
    }
  }
  function allSunk() {
    for (let i = 0; i < ships.length; i++) {
      if (ships[i].isSunk()) {
        continue;
      } else {
        return false;
      }
    }
    return true;
  }

  return {
    placeShip,
    receiveAttack,
    allSunk,
    get missedAttacks() {
      return misses;
    },
    get board() {
      return board;
    },
    get ships() {
      return ships;
    },
  };
}

function createPlayer(name, isHuman = true, board) {
  function attack(enemyBoard, x, y) {
    enemyBoard.receiveAttack(x, y);
  }

  return {
    name,
    isHuman,
    board,
    attack,
  };
}

function renderBoard(player, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  player.board.board.forEach((row, y) => {
    row.forEach((cell, x) => {
      const cellDiv = document.createElement("div");
      cellDiv.classList.add("cell");

      if (cell) {
        cellDiv.classList.add("ship");
      }
      cellDiv.dataset.x = x;
      cellDiv.dataset.y = y;

      container.appendChild(cellDiv);
    });
  });
}
const playerBoard = createGameBoard();
const enemyBoard = createGameBoard();

const player = createPlayer("Ben", true, playerBoard);
const computer = createPlayer("AI", false, enemyBoard);

renderBoard(player, "player");
renderBoard(computer, "computer");
