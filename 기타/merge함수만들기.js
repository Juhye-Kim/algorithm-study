const merge = (left, right) => {
  let sorted = [];
  let L = 0;
  let R = 0;

  while (true) {
    if (L === left.length && R === right.length) break;

    if (left[L] < right[R]) {
      sorted.push(left[L]);
      L++;
    } else {
      sorted.push(right[R]);
      R++;
    }

    if (L === left.length) {
      sorted.push(...right.slice(R));
      break;
    } else if (R === left.length) {
      sorted.push(...left.slice(L));
      break;
    }
  }
  return sorted;
};

const devide = (arr) => {
  let middleIdx = parseInt(arr.length / 2);
  let leftArr = arr.split(0, middleIdx);
  let rightArr = arr.split(middleIdx);
  return [...leftArr, ...rightArr];
};

const mergeSort = (left, right) => {
  return merge(left, right);
};

let left = [0, 2];
let right = [1, 3];
console.log(merge(left, right));
