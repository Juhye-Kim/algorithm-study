/**
 * 버블정렬
 * - 앞에서부터 두개씩 비교하면서 위치 교환
 * - in-place (O), stable (O), comparison (O)
 * - O(n^2)
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return arr;
}

console.log(bubbleSort([5, 2, 7, 1, 3, 10, 8]));
