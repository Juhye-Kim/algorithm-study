function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
  var [n, ...arr] = input.split("\n");
  let sorted = [];
  for (let i = 0; i < n; i++) {
    sorted.push([i, ...arr[i].split(" ")]);
  }
  sorted = sorted.sort((a, b) => {
    if (Number(a[1]) !== Number(b[1])) return Number(a[1]) - Number(b[1]);
    else return Number(a[0]) - Number(b[0]);
  });
  for (let i = 0; i < sorted.length; i++) {
    console.log(sorted[i].slice(1).join(" "));
  }
}

let input = `3
21 Junkyu
21 Dohyun
20 Sunyoung`;
console.log(solution(input));
