export function Createship(length) {
  return { length: length, hits: 0, sunk: false, hit };

  function hit() {
    if (this.hits === this.length - 1) {
      this.hits++;
      return (this.sunk = true);
    } else return this.hits++;
  }
}
