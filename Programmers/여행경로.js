// 프로그래머스 여행경로

function solution(tickets) {
  let graph = makeGraph(tickets);
  let answer;
  dfs(["ICN"], graph);

  function dfs(path, graph) {
    if (path.length === tickets.length + 1) {
      if (!answer) answer = path;
      return;
    }
    let from = path[path.length - 1];
    let cities = graph[from];
    if (!cities || cities.length === 0) return;
    cities.forEach((city, idx) => {
      let newGraph = { ...graph };
      newGraph[from] = newGraph[from].filter((el, i) => i !== idx);
      dfs([...path, city], newGraph);
    });
  }
  return answer;
}

function makeGraph(tickets) {
  let graph = {};
  tickets.forEach((ticket) => {
    let [from, to] = ticket;
    if (!graph[from]) graph[from] = [to];
    else graph[from].push(to);
    graph[from].sort();
  });
  return graph;
}
