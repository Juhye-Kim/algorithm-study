// 백준 - 18406 럭키 스트레이트 (구현)
function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var arr = input.split("").map((el) => Number(el));
  let left = arr.slice(0, parseInt(arr.length / 2));
  let right = arr.slice(parseInt(arr.length / 2));
  return sum(left) === sum(right) ? "LUCKY" : "READY";
  function sum(arr) {
    return arr.reduce((prev, sum) => prev + sum, 0);
  }
}

let input = "123402";
console.log(solution(input)); // LUCKY

input = "7755";
console.log(solution(input)); // READY
