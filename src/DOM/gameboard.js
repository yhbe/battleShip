import { Ship } from "./ship";

export function Gameboard() {
  return { board: createBoard(), place };

  function createBoard(length, coordinate) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let map = new Map();
    for (let elem of alphabet) {
      for (let i = 0; i < 11; i++) {
        map.set(`${elem}${i}`, []);
      }
    }
    return map;
  }

  function place(length, coordinate) {
    let [shipLetter, shipNumber] = coordinate;
    let createNewShip = new Ship(length);
    let results = [];

    for (let i = shipNumber; i < Number(shipNumber) + Number(length); i++) {
      let getValue = this.board.get(`${shipLetter}${i}`);
      if (getValue === undefined) {
        return null;
      }
      if (getValue.length === 0) {
        results.push(`${shipLetter}${i}`);
        getValue.push("Ship Is Here");
      } else return null;
    }
    createNewShip.coordinates = results;
    return createNewShip.coordinates;
  }
}
