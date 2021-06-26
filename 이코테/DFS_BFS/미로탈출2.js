function solution(input) {
  let [NM, ...MIRO] = input.split("\n");
  const [N, M] = NM.split(" ").map((el) => Number(el));
  MIRO = MIRO.map((el) => el.split("").map((el) => Number(el)));

  let visited = Array(N).fill(false);
  visited.forEach((_, i) => (visited[i] = Array(M).fill(false)));

  let Q = [[0, 0]];
  bfs(visited, 1);

  function bfs(x, y, visited, dist) {
    while (Q.length) {
      // let [x,y]
    }
  }
}

let input = `5 6
101010
111111
000001
111111
111111`;
console.log(solution(input));
