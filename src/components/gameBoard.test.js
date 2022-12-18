import { Gameboard } from "./gameBoard";
let newGame = new Gameboard();

test("gameBoard returns a object", () => {
  expect(newGame.board.size).toBe(80);
});

test("Placing a ship on coordinates", () => {
  expect(newGame.placeShip("A1")).toStrictEqual(["A1", "A2", "A3", "A4"]);
});

//test if ship is placed over another ship returns null
