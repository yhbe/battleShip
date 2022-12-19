import { Ship } from "./ship";

export function Gameboard() {
  return {
    board: createBoard(),
    place,
    receiveAttack,
    activeShips: [],
    shipsLeft,
  };

  function createBoard(length, coordinate) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let map = new Map();
    for (let elem of alphabet) {
      for (let i = 1; i < 11; i++) {
        map.set(`${elem}${i}`, []);
      }
    }
    return map;
  }

  function place(length, coordinate, axis) {
    let [shipLetter, shipNumber] = coordinate;
    let createNewShip = new Ship(length);
    this.activeShips.push(createNewShip);
    let results = [];

    if (axis === "axisY") {
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
    } else if (axis === "axisX") {
      let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
      let arrIndex = alphabet.findIndex((letter) => letter === shipLetter);
      alphabet = alphabet.slice(arrIndex, Number(length) + Number(arrIndex));
      if (alphabet.length < length) return null;
      for (let letter of alphabet) {
        let getValue = this.board.get(`${letter}${shipNumber}`);
        if (getValue.length === 0) {
          results.push(`${letter}${shipNumber}`);
          getValue.push("Ship Is Here");
        } else return null;
      }
    }

    createNewShip.coordinates = results;
    return createNewShip.coordinates;
  }

  function receiveAttack(coordinate) {
    let [shipLetter, shipNumber] = coordinate;
    let getValue = this.board.get(`${shipLetter}${shipNumber}`);
    if ((getValue = "Ship Is Here")) {
      let activeShipArr = this.activeShips;
      for (let category of activeShipArr) {
        let shipsLocations = category.coordinates;
        for (let location of shipsLocations) {
          if (location === `${shipLetter}${shipNumber}`) {
            category.hits++;
            shipsLocations.splice(shipsLocations.indexOf(location), 1);
            if (shipsLocations.length === 0) {
              category.sunk = true;
              console.log(activeShipArr, "<== Active ship array");
            }
            console.log(category, "<===");
          }
        }
      }
      return "Hit!";
    }
    return "Hit!";
  }

  function shipsLeft() {
    let activeShipsArr = this.activeShips;
    activeShipsArr = activeShipsArr.filter(
      (category) => category.coordinates.length !== 0
    );
    return activeShipsArr.length;
  }
}
