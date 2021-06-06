const merge = (left, right) => {
  let sorted = [];
  let L = 0;
  let R = 0;

  while (true) {
    if (L === left.length && R === right.length) break;

    if (L === left.length) {
      sorted.push(...right.slice(R));
      break;
    }
    if (R === right.length) {
      sorted.push(...left.slice(L));
      break;
    }

    if (left[L] < right[R]) {
      sorted.push(left[L]);
      L++;
    } else {
      sorted.push(right[R]);
      R++;
    }
  }
  return sorted;
};

const mergeSort = (arr) => {
  if (arr.length === 1) return arr;
  let middleIdx = parseInt(arr.length / 2);
  let left = mergeSort(arr.slice(0, middleIdx));
  let right = mergeSort(arr.slice(middleIdx));
  return merge(left, right);
};

console.log(mergeSort([30, 1, 4, 2, 5]));
