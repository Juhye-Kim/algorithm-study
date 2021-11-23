/**
 * 퀵 정렬
 * - pivot을 기준으로 작은건 왼쪽, 큰건 오른쪽으로 보내며 재귀적으로 반복
 * - in-place (O), stable (X), comparison (O)
 * - O(n logn)
 *   - 삽입, 삭제시 힙 재정비하는 시간 = logn
 *   - 모든 요소 개수 = n
 */
function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const left = arr.filter((el) => el < pivot);
  const right = arr.filter((el) => el > pivot);

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([2, 10, 4, 3, 8, 9]));
