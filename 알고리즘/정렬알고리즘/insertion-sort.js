/**
 * 삽입 정렬
 * - 배열을 순회하면서, 앞쪽 숫자와 비교하며 하나씩 자리 확정
 * - in-place (O), stable (O), comparison (O)
 * - O(n^2)
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  return arr;
}

console.log(insertionSort([11, 5, 4, 2, 7, 1, 3, 10, 8]));
