import { Ship } from "../Components/ship";

describe("ship", () => {
  let destroyer;

  beforeEach(() => {
    destroyer = new Ship(5);
  });

  test("new Ship returns a object", () => {
    expect(destroyer).toMatchObject({});
  });

  test("Has a length property", () => {
    expect(destroyer.length).toBe(5);
  });

  test("number of times its been hit property", () => {
    destroyer.hit();
    expect(destroyer.hits).toBe(1);
  });

  test("Whether or not its been sunk", () => {
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.sunk).toBe(true);
  });
});
