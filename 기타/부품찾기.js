// 이분탐색 (Binary Search)

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var [n, arr] = input.split("\n");
  n = Number(n);
  arr = arr
    .split(" ")
    .map((el) => Number(el))
    .sort((a, b) => a - b);

  let start = 0;
  let end = arr.length - 1;
  let middle = parseInt((start + end) / 2);

  while (start <= middle) {
    if (arr[middle] === n) return "yes";
    if (start === middle) break;
    else if (n < arr[middle]) {
      end = middle - 1;
      middle = parseInt((start + end) / 2);
    } else {
      start = middle + 1;
      middle = parseInt((start + end) / 2);
    }
  }
  return "no";
}

let input = `5
8 3 7 9 2`;
console.log(solution(input)); // no

input = `3
5 7 9`;
console.log(solution(input)); // yes
