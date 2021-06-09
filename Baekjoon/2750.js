// 수 정렬하기

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
  var [n, ...arr] = input.split("\n");
  arr = arr.map((el) => Number(el));

  while (arr.length) {
    let min = Math.min(...arr);
    let minIdx = arr.findIndex((el) => el === min);
    arr.splice(minIdx, 1);
    console.log(min);
  }
}

let input = `4
5
3
4
1`;
solution(input);
// 1
// 2
// 3
// 4
// 5
