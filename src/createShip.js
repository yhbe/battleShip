export function createShip(length) {
  return { length: length, hits: 0, sunk: false, hit, sunked };
  function hit() {
    if (this.hits === this.length - 1) {
      this.hits++;
      return this.sunked();
    }
    return (this.hits += 1);
  }
  function sunked() {
    return (this.sunk = true);
  }
}
