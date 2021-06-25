function solution(input) {
  let graph = {};
  input.forEach((el, i) => {
    graph[i] = el.sort();
  });

  let stack = [1];
  let visited = Array(input.length + 1).fill(false);
  visited[1] = true;
  dfs(graph, 1, visited);

  function dfs(graph, v, visited) {
    if (visited.filter((el) => el).length === input.length) return;
    visited[v] = true;
    console.log(v);
    graph[v].forEach((node) => {
      if (!visited[node]) dfs(graph, node, visited);
    });
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
