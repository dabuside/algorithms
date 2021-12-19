function sort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  if (arr.length === 2) {
    return [Math.min(arr[0], arr[1]), Math.max(arr[0], arr[1])];
  }
  const mid = Math.ceil(arr.length / 2);
  const left = sort(arr.slice(0, mid));
  const right = sort(arr.slice(mid, arr.length));
  return combineSorted(left, right);
}

function combineSorted(left, right) {
  const result = [];
  const resultLength = left.length + right.length;
  let leftIndex = 0;
  let rightIndex = 0;
  for (let resultIndex = 0; resultIndex < resultLength; resultIndex++) {
    if (
      left[leftIndex] < right[rightIndex] ||
      right[rightIndex] === undefined
    ) {
      result[resultIndex] = left[leftIndex];
      leftIndex++;
    } else {
      result[resultIndex] = right[rightIndex];
      rightIndex++;
    }
  }
  return result;
}

export default sort;
