export function createBattleship(size) {
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
