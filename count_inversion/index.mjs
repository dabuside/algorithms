// Input: for the Array A conting the number 1,2,3,4,...n in some arbitrary order
// Ouput: number of inversions = number of pairs(i, j) that i < j and A[i] > A[j]

function bruteForceCount(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  return count;
}

export default bruteForceCount;
