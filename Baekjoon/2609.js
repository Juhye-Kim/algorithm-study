function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var arr = input.split(" ").map((el) => Number(el));
  arr.sort((a, b) => a - b);

  let GCD = 1;
  while (arr[0] !== 1) {
    for (let i = 2; i <= arr[0]; i++) {
      if (arr[0] % i === 0 && arr[1] % i === 0) {
        GCD *= i;
        arr = arr.map((el) => el / i);
        break;
      }
      if (i === arr[0]) {
        console.log(GCD);
        console.log(GCD * arr[0] * arr[1]);
        return;
      }
    }
  }
  console.log(GCD);
  console.log(GCD * arr[0] * arr[1]);
}

let input = `24 18`;
console.log(solution(input));

input = `1 3`;
console.log(solution(input));
