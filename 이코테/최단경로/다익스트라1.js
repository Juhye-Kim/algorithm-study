/* 다익스트라 방법1. 간단하게 구현하기 O(V^2)
    1. 최단거리 테이블 선언
    2. 방문하지 않은 노드 중, 거리가 가장짧은 노드를 선택하기 위해
       매번 최단거리 테이블의 모든 원소를 순차탐색
*/

function solution(n, m, start, arr) {
  let graph = makeGraph(arr);
  let visited = Array(n + 1).fill(false);
  let distance = Array(n + 1).fill(Infinity);

  dijkstra(start);

  for (let i = 1; i < n + 1; i++) {
    if (distance[i] === Infinity) console.log(-1);
    else console.log(distance[i]);
  }

  function makeGraph(arr) {
    // 대충 그래프 만들어주는 함수
  }

  // 방문하지 않은 노드 중, 가장 최단거리가 짧은 노드 반환
  function getSmallestNode() {
    let min = Infinity;
    let idx = 0;
    for (let i = 1; i < n + 1; i++) {
      if (destance[i] < min && !visited[i]) {
        min = distance[i];
        idx = i;
      }
    }
    return idx;
  }

  // 다익스트라
  function dijkstra(start) {
    distance[start] = 0;
    visited[start] = true;
    graph[start].forEach((node) => {
      distance[node[0]] = node[1];
    });

    for (let i = 0; i < n - 1; i++) {
      let v = getSmallestNode();
      visited[v] = true;
      graph[v].forEach((node) => {
        let cost = distance[node] + node[1];
        if (cost < distance[node[0]]) {
          distance[node[0]] = cost;
        }
      });
    }
  }
}

let input;
console.log(solution(input));
