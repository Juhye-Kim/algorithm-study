// 덩치
function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  const [n, ...xy] = input.split("\n");
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(xy[i].split(" ").map((el) => Number(el)));
  }
  let res = Array(arr.length).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]) {
        res[i]++;
      }
    }
  }
  console.log(res.join(" "));
}

let input = `5
55 185
58 183
88 186
60 175
46 155`;
console.log(solution(input));

input = `3
20 30
10 20
30 10`;
console.log(solution(input));
