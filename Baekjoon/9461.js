// 파도반 수열
function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var [n, ...arr] = input.split("\n").map((el) => Number(el));

  let memo = [1, 1, 1, 2, 2];
  for (let i = 0; i < n; i++) {
    if (arr[i] > memo.length) {
      for (let j = memo.length; j < arr[i]; j++) {
        memo[j] = memo[j - 1] + memo[j - 5];
      }
      console.log(memo[arr[i] - 1]);
    } else {
      console.log(memo[arr[i] - 1]);
    }
  }
}

let input = `2
6
12`;
console.log(solution(input)); //
