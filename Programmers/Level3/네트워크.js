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

//ver2.
function solution(n, computers) {
  const graph = makeGraph(computers);
  let visited = Array(n).fill(false);
  let ans = 0;

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      let Q = [i];
      visited[i] = true;

      while (Q.length) {
        const v = Q.shift();
        Q.push(...filterNode(graph[v]));
      }
      ans++;
    }
  }

  return ans;

  function filterNode(nodes) {
    const filtered = nodes.filter((node) => !visited[node]);
    filtered.forEach((f) => (visited[f] = true));
    return filtered;
  }
}

function makeGraph(coms) {
  let graph = {};

  coms.forEach((nets, i) => {
    graph[i] = [];
    nets.forEach((n, j) => i !== j && n === 1 && graph[i].push(j));
  });

  return graph;
}
