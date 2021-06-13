function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
  [nm, ...arr] = input.toString().split("\n");
  [n, m] = nm.split(" ");
  n = parseInt(n);
  m = parseInt(m);

  let [x, y] = [0, 0];
  let dx = [-1, 0, 1, 0];
  let dy = [0, -1, 0, 1];

  let visited = [];
  for (let i = 0; i < n; i++) {
    let tmp = [];
    for (let j = 0; j < m; j++) {
      tmp.push(0);
    }
    visited.push(tmp);
  }
  visited[0][0] = 1;

  let Q = [[0, 0]];

  while (Q.length) {
    [x, y] = Q.shift();
    if (x === n - 1 || y === m - 1) break;

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];
      if (nx < n && 0 <= nx && ny < y && 0 <= y) {
        if (visited[nx][ny] === 0 && arr[x][y] === "1") {
          visited[nx][ny] = visited[x][y] + 1;
          Q.push([nx, ny]);
        }
      }
    }
  }
  console.log(visited);
}

solution(`4 6
101111
101010
101011
111011`); // 15

// solution(`4 6
// 110110
// 110110
// 111111
// 111101`); // 9

// solution(`2 25
// 1011101110111011101110111
// 1110111011101110111011101`); // 38
