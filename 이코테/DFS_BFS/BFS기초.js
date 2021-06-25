function solution(input) {
  let graph = {};
  input.forEach((el, i) => {
    graph[i] = el.sort();
  });

  let visited = Array(input.length + 1).fill(false);
  visited[1] = true;
  let Q = [1];
  bfs(graph, 1, visited);

  function bfs(graph, v, visited) {
    if (visited.filter((el) => el).length === input.length) return;

    while (Q.length) {
      let v = Q.shift();
      console.log(v);
      graph[v].forEach((node) => {
        if (!visited[node]) {
          Q.push(node);
          visited[node] = true;
        }
      });
    }
  }
}

let input = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];
console.log(solution(input));
