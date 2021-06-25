function solution(input) {
  const icepack = input
    .split("\n")
    .map((el) => el.split("").map((el) => Number(el)));

  let count = 0;
  let visited = Array(icepack.length).fill([]);
  visited.forEach((_, i) => {
    visited[i] = Array(icepack[i].length).fill(false);
  });

  for (let i = 0; i < icepack.length; i++) {
    for (let j = 0; j < icepack[i].length; j++) {
      if (icepack[i][j] === 0 && !visited[i][j]) {
        dfs(i, j);
        count++;
      }
    }
  }

  function dfs(x, y) {
    if (x < 0 && x > icepack.length && y < 0 && y > icepack[0].length) return;
    if (icepack[x] && icepack[x][y] === 0 && !visited[x][y]) {
      visited[x][y] = true;
      dfs(x + 1, y);
      dfs(x - 1, y);
      dfs(x, y + 1);
      dfs(x, y - 1);
    } else {
      return;
    }
  }
  return count;
}

let input = `00110
11011
01111
00100
10100`;
console.log(solution(input));

input = `001
010
101`;
console.log(solution(input));
