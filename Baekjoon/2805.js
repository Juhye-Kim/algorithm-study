// 백준 나무자르기
function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  let [nm, trees] = input.split("\n");
  const [n, m] = nm.split(" ").map((el) => Number(el));
  trees = trees.split(" ").map((el) => Number(el));
  trees.sort((a, b) => a - b);

  let answer = 0;
  let [left, right] = [0, trees[n - 1]];
  let middle = parseInt((left + right) / 2);

  while (left <= right) {
    middle = parseInt((left + right) / 2);
    if (check(trees, middle) === m) {
      return middle;
    } else if (check(trees, middle) > m) {
      answer = middle;
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return answer;

  function check(trees, middle) {
    let sum = 0;
    trees.forEach((tree) => {
      if (middle <= tree) sum += tree - middle;
    });
    return sum;
  }
}

let input = `4 7
20 15 10 17`;
console.log(solution(input)); // 15

input = `5 20
4 42 40 26 46`;
console.log(solution(input)); // 36

input = `1 1
100000000`;
console.log(solution(input));
