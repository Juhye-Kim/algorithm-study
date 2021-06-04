function solution(input) {
  // const [n, ...arr] = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
  const [n, ...arr] = input.trim().split("\n");
  var answer = 0;

  let stack = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] === "0") stack.pop();
    else stack.push(parseInt(arr[i]));
  }
  for (let i = 0; i < stack.length; i++) {
    answer += stack[i];
  }
  return answer;
}

let result = solution(`4
3
0
4
0`);
console.log(result);

result = solution(`10
1
3
5
4
0
0
7
0
0
6`);
console.log(result);
