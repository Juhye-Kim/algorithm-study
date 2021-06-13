// N과 M (2)

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var [n, m] = input.split(" ").map((el) => Number(el));
  let nums = Array(n).fill(0);
  nums = nums.map((el, idx) => idx + 1);
  aux([], 0);

  function aux(arr, idx) {
    if (arr.length === m) {
      console.log(arr.join(" "));
      return;
    }
    for (let i = idx; i < nums.length; i++) {
      aux([...arr, nums[i]], i + 1);
    }
  }
}

let input = `3 1`;
console.log(solution(input)); //

input = `4 2`;
console.log(solution(input)); //
