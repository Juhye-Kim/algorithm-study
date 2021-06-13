// ATM

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var [n, arr] = input.split("\n");
  arr = arr.split(" ").map((el) => Number(el));
  arr.sort((a, b) => a - b);

  let memo = [];
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      memo[i] = arr[i];
      continue;
    }
    memo[i] = memo[i - 1] + arr[i];
  }
  console.log(memo.reduce((prev, cur) => prev + cur, 0));
}

let input = `5
3 1 4 3 2`;
console.log(solution(input)); // 32
