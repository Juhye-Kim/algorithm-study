function solution(input) {
  [n, arr] = input.split("\n");
  plans = arr.split(" ");

  let pos = [1, 1];
  let move = { R: [0, 1], L: [0, -1], U: [-1, 0], D: [1, 0] };
  plans.forEach((plan) => {
    let x = pos[0] + move[plan][0];
    let y = pos[1] + move[plan][1];
    if (x > 0 && x < n) pos[0] = x;
    if (y > 0 && y < n) pos[1] = y;
  });
  return pos.join(" ");
}

let input = `5
R R R U D D`;
console.log(solution(input));
