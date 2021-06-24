function solution(input) {
  let alphabet = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8 };
  let pos = input.split("");
  pos = [alphabet[pos[0]], Number(pos[1])];
  let cnt = 0;

  const steps = [
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
  ];

  steps.forEach((step) => {
    let nx = pos[0] + step[0];
    let ny = pos[1] + step[1];
    if (nx > 0 && nx <= 8 && ny > 0 && ny <= 8) {
      cnt++;
    }
  });
  return cnt;
}

let input = "a1";
console.log(solution(input));
