export function createPlayer(name, isHuman = true, board) {
  function attack(enemyBoard, x, y) {
    enemyBoard.receiveAttack(x, y);
  }

  return {
    isHuman,
    board,
    attack,
  };
}
