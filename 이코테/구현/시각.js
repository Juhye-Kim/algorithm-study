function solution(input) {
  let cnt = 0;
  for (let i = 0; i <= input; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        if (("" + i + j + k).split("").includes("3")) cnt++;
      }
    }
  }
  return cnt;
}

let input = 5;
console.log(solution(input));
