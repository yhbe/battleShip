import { Ship } from "./ship";

let battleShip = new Ship(4);

test("creating a new ship returns values", () => {
  expect(battleShip).toMatchObject({ length: 4, hits: 0, sunk: false });
});

test("Hit function on battleship increases number of hits till sunk", () => {
  battleShip.hit();
  expect(battleShip.hits).toBe(1);
  battleShip.hit();
  expect(battleShip.hits).toBe(2);
  battleShip.hit();
  expect(battleShip.hits).toBe(3);
  battleShip.hit();
  expect(battleShip.sunk).toBe(true);
});
