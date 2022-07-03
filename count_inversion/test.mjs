import count from "./index.mjs";
import assert from "assert";

describe("count inversion", () => {
  it("count inversion currectly", () => {
    assert.equal(count([1, 3, 5, 2, 4, 6]), 3); //(3,2), (5,2), (5,4)
    assert.equal(count([]), 0);
    assert.equal(count([1, 2, 3, 4, 5, 6]), 0);
    assert.equal(count([6, 5, 4, 3, 2, 1]), 15); // 6*(6*5)/2
  });
});
