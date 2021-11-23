/**
 * 선택 정렬
 * - 최솟값 찾아서 하나씩 자리 교환
 * - in-place (O), stable (O), comparison (O)
 * - O(n^2)
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIdx] > arr[j]) minIdx = j;
    }

    [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
  }
  return arr;
}

console.log(selectionSort([5, 2, 7, 1, 3, 10, 8]));
