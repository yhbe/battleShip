import { Createship } from "./createShip";
export function Gameboard() {
  return { board: createBoard(), placeShip };

  function createBoard() {
    let map = new Map();
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];

    for (let char of alphabet) {
      for (let i = 1; i < 11; i++) {
        map.set(`${char}${i}`, []);
      }
    }
    return map;
  }

  function placeShip(pointA, board = this.board) {
    let [first, second] = pointA;
    let newShip = new Createship(4);
    let arr = [];
    for (let i = second; i <= newShip.length; i++) {
      let position = board.get(`${first}${i}`);
      if (position.length === 0) {
        arr.push(`${first}${i}`);
        position.push("Ship here");
      } else return null;
    }
    return arr;
  }
}
