import { createShip } from "./createShip";

test("Return of new createShip", () => {
  expect(createShip(4)).toMatchObject({ length: 4, hits: 0, sunk: false });
});
//

test("Hits on aircraft carrier work", () => {
  let aircraftCarrier = createShip(4);
  expect(aircraftCarrier.hit()).toBe(1);
});

test("Sink aircraft carrier", () => {
  let aircraftCarrier = createShip(4);
  aircraftCarrier.hit();
  aircraftCarrier.hit();
  aircraftCarrier.hit();
  aircraftCarrier.hit();
  expect(aircraftCarrier.sunk).toBe(true);
});
