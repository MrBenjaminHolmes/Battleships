import "./styles.css";

function createBattleship(length) {
  return {
    length,
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

  function placeShip(ship, startX, startY, isHorizontal = True) {}
  function receiveAttack(x, y) {}
  function allSunk() {
    for (let i; i <= ships.length; i++) {
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
