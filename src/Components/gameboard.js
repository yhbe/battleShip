import { Ship } from "./ship";

export function Gameboard() {
  return {
    board: createBoard(),
    place,
    receiveAttack,
    activeShips: [],
    shipsLeft,
    playedMoves: [],
    computerMoves: new Set(),
    computerAttack,
    randomPlace,
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

    if (axis === "axisX") {
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
    } else if (axis === "axisY") {
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
    console.log(this.activeShips);
    if (getValue.length === 0) {
      this.playedMoves.push(`${shipLetter}${shipNumber}`);
      getValue.push("Miss");
      return "Miss!";
    }

    if (getValue[0] === "Miss" || getValue[0] === "Played") {
      return "You played here already";
    }

    if (getValue[0] === "Ship Is Here") {
      let activeShipArr = this.activeShips;
      for (let category of activeShipArr) {
        let shipsLocations = category.coordinates;
        for (let location of shipsLocations) {
          if (location === `${shipLetter}${shipNumber}`) {
            category.hits++;
            shipsLocations.splice(shipsLocations.indexOf(location), 1);
            if (shipsLocations.length === 0) {
              category.sunk = true;
            }
            this.playedMoves.push(`${shipLetter}${shipNumber}`);
            getValue.shift();
            getValue.push("Played");
            return "Hit!";
          }
        }
      }
    }
  }

  function shipsLeft() {
    let activeShipsArr = this.activeShips;
    activeShipsArr = activeShipsArr.filter(
      (category) => category.coordinates.length !== 0
    );
    return activeShipsArr.length;
  }

  function computerAttack() {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
    let possibleMoves = [];

    for (let elem of alphabet) {
      for (let i = 1; i < 11; i++) {
        possibleMoves.push([`${elem}`, `${i}`]);
      }
    }

    possibleMoves = possibleMoves.filter((move) => {
      move = String(move);
      return !this.computerMoves.has(move);
    });

    if (possibleMoves.length === 0) return "You win!";

    let randomNumber = Math.floor(Math.random() * possibleMoves.length);
    let move = possibleMoves.at(randomNumber);
    this.computerMoves.add(String(move));

    const attack = () => {
      this.receiveAttack(move);
    };
    attack();

    return `Computer played ${move}`;
  }

  function randomPlace(board) {
    let length = 5;
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H"];
    for (let i = 0; i < 6; i++) {
      let randomLetter = Math.trunc(Math.random() * 8);
      let random = Math.trunc(Math.random() * 10);
      let a = this.place(length, [alphabet[randomLetter], random], "axisX");
      if (a === null) {
        length++;
      }
      length = length - 1;
      console.log(this.board, "Board <=== Check values here");
    }
  }
}
