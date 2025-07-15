export function createPlayer(name, isHuman = true, board) {
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
