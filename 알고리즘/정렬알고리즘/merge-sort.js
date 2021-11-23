/**
 * 합병 정렬
 * - 배열을 반으로 나누고, 정렬 후 합치는 작업을 반복적으로 해서 모든 배열을 정렬
 * - 분할정복
 * - 메모리 소모가 큰 편
 * - in-place (X), stable (O), comparison (O)
 * - O(n logn)
 */
function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const middle = parseInt(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

function merge(left, right) {
  let sorted = [];
  let [l, r] = [0, 0];

  while (true) {
    if (l === left.length && r === right.length) break;

    if (l === left.length) {
      sorted.push(...right.slice(r));
      break;
    }

    if (r === right.length) {
      sorted.push(...left.slice(l));
      break;
    }

    if (left[l] < right[r]) {
      sorted.push(left[l]);
      l++;
    } else {
      sorted.push(right[r]);
      r++;
    }
  }

  return sorted;
}

console.log(mergeSort([2, 10, 4, 3, 8, 9]));

// [2, 10, 4] / [8, 9]
// [2, 10], [4] / [8], [9]
// [2], [10] / [4] / [8] / [9]
// -------------------------
// [2, 10] / [4] / [8] / [9]
// [2, 4, 10] / [8, 9]
// [2, 4, 8, 9, 10]
