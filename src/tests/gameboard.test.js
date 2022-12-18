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
    expect(battleShip.place(5, ["A", "1"])).toStrictEqual([
      "A1",
      "A2",
      "A3",
      "A4",
      "A5",
    ]);
  });

  test("Placing a battleship over another returns null!", () => {
    battleShip.place(5, "A1");
    expect(battleShip.place(5, ["A", "1"])).toBeNull();
  });

  test("Placing a battleship off the coordinates returns null", () => {
    expect(battleShip.place(5, ["A", "10"])).toBeNull();
  });
});
