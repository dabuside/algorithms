import sort from "./index.mjs";
import assert from "assert";

describe("quick sort", () => {
  it("sort the arr", () => {
    const randomArr = Array(101)
      .fill(0)
      .map(() => Math.random());
    assert.deepEqual(
      sort([...randomArr]),
      [...randomArr].sort((a, b) => a - b)
    );
  });

  it("match edge case", () => {
    assert.deepEqual(sort([]), []);
    assert.deepEqual(sort([1, 1, 1, 1]), [1, 1, 1, 1]);
    assert.deepEqual(sort([-1]), [-1]);
  });
});
