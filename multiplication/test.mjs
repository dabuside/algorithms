import { mutiple, splitNumber } from "./index.mjs";
import assert from "assert";

it("mutiple success", () => {
  assert.equal(mutiple(1234, 5678), 7006652);
  assert.equal(mutiple(1, 5678), 5678);
  assert.equal(mutiple(0, 5678), 0);
  assert.equal(mutiple(1, 1), 1);
});

it("shoule split number currectly", () => {
  assert.deepEqual(splitNumber(5678, 1234), {
    a: 56,
    b: 78,
    c: 12,
    d: 34,
    m: 2,
    n: 4,
  });
});
