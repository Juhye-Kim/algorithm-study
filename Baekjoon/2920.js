// 음계

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
  var arr = input.split(" ");
  let result;
  for (let i = 0; i < arr.length - 1; i++) {
    if (Number(arr[i]) < Number(arr[i + 1])) {
      if (result === "descending") return "mixed";
      result = "ascending";
    } else {
      if (result === "ascending") return "mixed";
      result = "descending";
    }
  }
  return result;
}

let input = `1 2 3 4 5 6 7 8`;
console.log(solution(input)); // ascending

input = `8 7 6 5 4 3 2 1`;
console.log(solution(input)); // descending

input = `8 1 7 2 6 3 5 4`;
console.log(solution(input)); // mixed
