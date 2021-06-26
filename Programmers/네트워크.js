function solution(n, computers) {
  const graph = makeGraph(computers);
  const visited = Array(n).fill(false);
  let answer = 0;
  let Q = [];
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      Q.push(i);
      while (Q.length) {
        let v = Q.shift();
        visited[v] = true;
        Q.push(...graph[v].filter((node) => !visited[node]));
      }
      answer++;
    }
  }
  return answer;
}

function makeGraph(computers) {
  let graph = {};
  computers.forEach((com, idx) => {
    let adj = [];
    for (let i = 0; i < com.length; i++) {
      if (i !== idx && com[i] === 1) adj.push(i);
    }
    graph[idx] = adj;
  });
  return graph;
}
