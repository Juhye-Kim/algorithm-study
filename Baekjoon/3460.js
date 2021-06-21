// 백준 이진수
function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var [n, ...nums] = input.split("\n").map((el) => Number(el));
  nums = nums.map((el) => Number(el));
  let ones = [];

  nums.forEach((num) => {
    num
      .toString(2)
      .split("")
      .reverse()
      .forEach((el, idx) => {
        if (el === "1") ones.push(idx);
      });
  });
  console.log(ones.join(" "));
}

let input = `1
13`;
console.log(solution(input));
