// 프로그래머스 단어변환

// // ver1
// const isEmpty = (Q) => Q.length === 0;
// const filterWords = (words, from, step) => {
//   let reachables = [];
//   for (let word of words) {
//     let cnt = word.length;
//     for (let i in word) {
//       if (from[i] === word[i]) cnt--;
//     }
//     if (cnt === 1) reachables.push([word, step + 1]);
//   }
//   return reachables;
// };

// function solution(begin, target, words) {
//   const Q = [[begin, 0]];

//   while (!isEmpty(Q)) {
//     const [from, step] = Q.shift();

//     if (from === target) return step;
//     words = words.filter((el) => el !== from);
//     const reachables = filterWords(words, from, step);
//     Q.push(...reachables);
//   }
//   return 0;
// }

// ver2
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
