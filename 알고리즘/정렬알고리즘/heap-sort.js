/**
 * 힙 정렬
 * - 특정 노드 자식 중 더 큰 자식과 위치를 바꿈
 * - 전체 정렬보다는 가장 큰/작은 값 몇개 필요할 때 유용
 * - in-place (O), stable (X), comparison (O)
 * - O(n logn)
 *   - 삽입, 삭제시 힙 재정비하는 시간 = logn
 *   - 모든 요소 개수 = n
 */
function heapSort(arr) {
  for (let i = arr.length; i >= 0; i--) {
    arr = heapify(arr, i);
    if (arr[0] > arr[i]) [arr[i], arr[0]] = [arr[0], arr[i]];
  }
  return arr;
}

function heapify(arr, lastIdx) {
  // leaf노드는 제외
  let idx = parseInt(lastIdx / 2) - 1;

  while (idx >= 0) {
    const l = idx * 2 + 1;
    const r = idx * 2 + 2;

    // 큰 수를 위로 보내기
    if (arr[l] >= arr[r]) {
      if (arr[idx] < arr[l]) [arr[idx], arr[l]] = [arr[l], arr[idx]];
    } else {
      if (arr[idx] < arr[r]) [arr[idx], arr[r]] = [arr[r], arr[idx]];
    }

    idx--;
  }
  return arr;
}

console.log(heapSort([2, 10, 4, 3, 8, 9]));
