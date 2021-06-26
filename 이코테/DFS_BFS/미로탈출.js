function solution(input) {
  let [NM, ...MIRO] = input.split("\n");
  const [N, M] = NM.split(" ").map((el) => Number(el));
  MIRO = MIRO.map((el) => el.split("").map((el) => Number(el)));

  let visited = Array(N).fill(false);
  let answer = Infinity;
  visited.forEach((_, i) => (visited[i] = Array(M).fill(false)));
  bfs(0, 0, visited, 1);

  function bfs(x, y, visited, dist) {
    if (x === N - 1 && y === M - 1) {
      answer = Math.min(answer, dist);
      return;
    }
    if (x < 0 || x > N || y < 0 || y > N) return;

    if (MIRO[x] && MIRO[x][y] === 1 && !visited[x][y]) {
      visited[x][y] = true;
      bfs(x + 1, y, visited, dist + 1);
      bfs(x - 1, y, visited, dist + 1);
      bfs(x, y + 1, visited, dist + 1);
      bfs(x, y - 1, visited, dist + 1);
    }
  }
  return answer;
}

let input = `5 6
101010
111111
000001
111111
111111`;
console.log(solution(input));
