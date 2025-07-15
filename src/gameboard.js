export function createGameBoard() {
  const ships = [];
  const misses = [];
  const hits = [];
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
      hits.push([x, y]);
      return true;
    } else {
      misses.push([x, y]);
      return false;
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
    get hits() {
      return hits;
    },
    size: board.length,
  };
}
