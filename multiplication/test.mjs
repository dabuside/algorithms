import { mutiple, splitNumber } from "./index.mjs";
import assert from "assert";

it("should add to numbers from an es module", () => {
  assert.equal(mutiple(1234, 5678), 7006652);
});

it("shoule split number currectly", () => {
  assert.deepEqual(splitNumber(1234), [12, 34]);
  assert.deepEqual(splitNumber(4567), [45, 67]);
  assert.deepEqual(splitNumber(123), [1, 23]);
});
