import "./styles.css";

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
      const y = isHorizontal ? startY + i : startY;

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
    if (board[x][y] !== null) {
      const hitShip = board[x][y];
      hitShip.hit();
    }
  }
  function allSunk() {
    for (let i = 0; i <= ships.length; i++) {
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
      return missedAttacks;
    },
    get board() {
      return board;
    },
    get ships() {
      return ships;
    },
  };
}

const testShip = createBattleship(4);
const testBoard = createGameBoard();
testBoard.placeShip(testShip, 4, 4, true);
console.log(testShip.isSunk());
console.log(testBoard.board);
