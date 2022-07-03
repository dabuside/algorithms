function partition(arr, low, high) {
  const pivot = low;
  let storeIndex = pivot + 1;
  for (let i = low + 1; i <= high; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, storeIndex, i);
      storeIndex++;
    }
  }
  swap(arr, pivot, storeIndex - 1);
  return storeIndex - 1;
}
function quickSort(arr, low, high) {
  if (low < high) {
    const pi = partition(arr, low, high);

    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export default function sort(arr) {
  quickSort(arr, 0, arr.length - 1);
  return arr;
}
