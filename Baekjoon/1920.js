// 수 찾기 - 이분탐색

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var [n, arr, m, nums] = input.split("\n");
  arr = arr
    .split(" ")
    .map((el) => Number(el))
    .sort((a, b) => a - b);
  nums = nums.split(" ").map((el) => Number(el));
  [n, m] = [Number(n), Number(m)];

  for (let j = 0; j < n; j++) {
    console.log(isIn(arr, nums[j]));
  }
}

function isIn(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  let middle = parseInt((start + end) / 2);

  while (start <= middle) {
    if (arr[middle] === num || arr[end] === num) {
      return 1;
    }
    if (start === middle) break;
    else if (num < arr[middle]) {
      end = middle - 1;
      middle = parseInt((start + end) / 2);
    } else {
      start = middle + 1;
      middle = parseInt((start + end) / 2);
    }
  }
  return 0;
}

let input = `5
4 1 5 2 3
5
1 3 7 9 5`;
console.log(solution(input)); //
