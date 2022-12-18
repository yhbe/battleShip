import { Createship } from "./createShip";

test("Creates a ship with properties", () => {
  expect(Createship(4)).toMatchObject({ length: 4, hits: 0, sunk: false });
});

test("Hits increase ships hitcounter", () => {
  let newShip = new Createship(4);
  newShip.hit();
  expect(newShip.hits).toBe(1);
  newShip.hit();
  expect(newShip.hits).toBe(2);
  newShip.hit();
  expect(newShip.hits).toBe(3);
  newShip.hit();
  expect(newShip.hits).toBe(4);
  expect(newShip.sunk).toBe(true);
});
