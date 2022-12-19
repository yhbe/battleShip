import { Gameboard } from "../DOM/gameboard";
import { Ship } from "../DOM/ship";

describe("testing gameboard", () => {
  let battleShip;

  beforeEach(() => {
    battleShip = new Gameboard();
  });

  test("Gameboard returns a object", () => {
    expect(battleShip.board).toMatchObject({});
  });

  test("Placing a battleship returns all of its coordinates", () => {
    expect(battleShip.place(5, ["A", "1"], "axisY")).toStrictEqual([
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
    ]);
  });

  test("Placing a battleship returns all of its coordinates", () => {
    expect(battleShip.place(5, ["A", "6"], "axisY")).toStrictEqual([
      "A6",
      "A7",
      "A8",
      "A9",
      "A10",
    ]);
  });

  test("Placing a battleship over another returns null!", () => {
    battleShip.place(5, ["A", "1"], "axisY");
    expect(battleShip.place(5, ["A", "1"], "axisY")).toBeNull();
  });

  test("Placing a battleship off the coordinates returns null", () => {
    expect(battleShip.place(5, ["A", "10"], "axisY")).toBeNull();
  });

  // test("Can place ship on x axis", () => {
  //   expect(battleShip.place(5, ["A", "1"], "axisX")).toStrictEqual([
  //     "A1",
  //     "B1",
  //     "C3",
  //     "D3",
  //     "E3",
  //   ]);
  // });
});
