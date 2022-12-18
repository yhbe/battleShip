export function Ship(length) {
  return { coordinates: null, length: length, hits: 0, sunk: false, hit };

  function hit() {
    if (this.hits === length - 1) {
      return (this.sunk = true);
    }
    return this.hits++;
  }
}
