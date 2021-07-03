// 프로그래머스 단어변환 (dfs/bfs)

// bfs
function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  // 인접리스트 생성
  let graph = {};
  let indexes = {};
  [begin, ...words].forEach((word, idx) => {
    let adj = [];
    words.forEach((el) => {
      if (isAdjacent(word, el)) adj.push(el);
    });
    graph[word] = adj;
    indexes[word] = idx - 1;
  });

  // bfs
  let visited = Array(words.length).fill(false);
  let Q = [[begin, 0]];
  while (Q.length) {
    let [v, step] = Q.shift();
    visited[indexes[v]] = true;
    if (v === target) return step;
    if (visited.filter((el) => el).length === words.length) return 0;
    Q.push(
      ...graph[v]
        .filter((node) => !visited[indexes[node]])
        .map((el) => [el, step + 1])
    );
  }
  return 0;
}

function isAdjacent(word, el) {
  let cnt = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] !== el[i]) cnt++;
    if (cnt > 1) return false;
  }
  if (cnt === 1) return true;
  return false;
}

// ver3. dfs
function solution(begin, target, words) {
  const graph = makeGraph([begin, ...words]);
  let min = Infinity;
  dfs(begin, [begin], 0);
  return min === Infinity ? 0 : min;

  function dfs(cur, visited, step) {
    if (cur === target) {
      min = Math.min(min, step);
      return;
    }
    if (visited.length === words.length + 1) return;
    let reachables = graph[cur].filter((node) => !visited.includes(node));
    reachables.forEach((el) => dfs(el, [...visited, el], step + 1));
  }

  function makeGraph(arr) {
    let graph = {};
    for (let i = 0; i < arr.length; i++) {
      let tmp = [];
      for (let j = 0; j < arr.length; j++) {
        let cnt = 0;
        for (let k = 0; k < arr[i].length; k++) {
          if (arr[i][k] !== arr[j][k]) cnt++;
        }
        if (cnt === 1) tmp.push(arr[j]);
      }
      graph[arr[i]] = tmp;
    }
    return graph;
  }
}
