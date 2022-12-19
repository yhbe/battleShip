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

  test("Can place ship on x axis", () => {
    expect(battleShip.place(5, ["A", "1"], "axisX")).toStrictEqual([
      "A1",
      "B1",
      "C1",
      "D1",
      "E1",
    ]);
  });

  test("Can place ship on x axis", () => {
    expect(battleShip.place(5, ["D", "1"], "axisX")).toStrictEqual([
      "D1",
      "E1",
      "F1",
      "G1",
      "H1",
    ]);
  });

  test("Can place ship on x axis", () => {
    expect(battleShip.place(2, ["D", "1"], "axisX")).toStrictEqual([
      "D1",
      "E1",
    ]);
  });

  test("Cant place ship over another ship", () => {
    battleShip.place(2, ["D", "1"], "axisX");
    expect(battleShip.place(2, ["C", "1"], "axisX")).toBeNull();
  });

  test("receive a coordinate and return if a ship was hit or not", () => {
    battleShip.place(2, ["A", "1"], "axisY");
    battleShip.place(2, ["D", "1"], "axisX");
    expect(battleShip.shipsLeft()).toBe(2);
    expect(battleShip.receiveAttack(["E", "1"])).toBe("Hit!");
    expect(battleShip.activeShips.length).toBe(2);
    expect(battleShip.receiveAttack(["D", "1"])).toBe("Hit!");
    expect(battleShip.shipsLeft()).toBe(1);
    expect(battleShip.receiveAttack(["A", "1"])).toBe("Hit!");
    expect(battleShip.receiveAttack(["A", "2"])).toBe("Hit!");
    expect(battleShip.shipsLeft()).toBe(0);
  });

  test("receive a coordinate and return if a ship was hit or not", () => {
    battleShip.place(2, ["A", "1"], "axisY");
    battleShip.place(2, ["D", "1"], "axisX");
    expect(battleShip.receiveAttack(["B", "4"])).toBe("Miss!");
  });
});
