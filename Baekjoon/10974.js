// 모든 순열

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  n = Number(input);
  let nums = Array(n).fill(0);
  nums = nums.map((el, idx) => idx + 1);
  aux([]);

  function aux(arr) {
    if (arr.length === n) {
      console.log(arr.join(" "));
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!arr.includes(nums[i])) aux([...arr, nums[i]]);
    }
  }
}

let input = "3";
console.log(solution(input)); //

input;
console.log(solution(input)); //
