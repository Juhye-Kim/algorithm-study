function solution(input) {
  // const n = require("fs").readFileSync("/dev/stdin").toString().trim();
  const n = input.toString().trim();
  let stack = [];
  for (let i = n; i > 0; i--) {
    stack.push(i);
  }
  while (stack.length > 1) {
    stack.pop();
    let tmp = stack.pop();
    stack.unshift(tmp);
  }
  return stack[0];
}
let result = solution("5");
console.log(result);
