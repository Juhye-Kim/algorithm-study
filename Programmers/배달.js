// 프로그래머스 - 배달

// ver1. 재귀로 구현
// module.exports = function solution(N, road, K) {
//   let reachables = Array(N).fill(false);
//   reachables[0] = true;
//   let arr = Array(N).fill(false);
//   arr[0] = true;

//   check(1, 0, arr);

//   function check(cur, sum, visited) {
//     // 종료 조건
//     if (sum > K) return true;
//     if (visited.filter((el) => el).length === N) return true;

//     // 일반 경우
//     let copied = [...visited];
//     copied[cur - 1] = true;
//     reachables[cur - 1] = true;

//     for (let i = 0; i < road.length; i++) {
//       if (road[i][0] === cur && !copied[road[i][1]]) {
//         check(road[i][1], sum + road[i][2], copied);
//       }
//       if (road[i][1] === cur && !copied[road[i][0]]) {
//         check(road[i][0], sum + road[i][2], copied);
//       }
//     }
//   }
//   return reachables.filter((el) => el).length;
// };

// ver2. DFS (stack으로 구현)
// N개의 마을 중 총 몇개의 마을에 배달이 가능한지 찾기
// -> 0이 N개 담긴 배열 ables, 배달가능한 마을의 index에는 1을 담을 것
// -> 최종적으로 ables에 1이 몇개인지 세면, 배달가능한 마을의 총개수가 나옴

// 1. solution (메인함수)
// 현재 위치(cur)에서 갈 수 있는 마을 정보를 stack에 담음
// -> filterRoad 함수를 통해 가능한 모든 마을 찾아냄
// stack에서 값을 하나씩 꺼내면서 이 과정을 반복

// 2. filterRoad (현재 위치에서 갈 수 있는 모든 마을을 찾는 모듈)
// 1) road 배열을 순회하면서, 현재위치(cur)가 포함된 요소를 찾아냄
// 2) 현위치가 포함된 요소에는, 이어진 다른 마을과 가중치(weight)에 대한 정보도 담겨있음
//   2-1) (누적시간 + 가중치 <= K) 인 경우에만, 갈 수 있는 마을로 취급
//   2-2) i. 현위치가 요소의 첫번째 값이면, 연결된 마을은 두번째 값
//           방문한적도 없다면 stack에 넣음
//   2-2) ii. 현위치가 요소의 두번째 값이면, 연결된 마을은 첫번째 값
//           방문한적도 없다면 stack에 넣음

// 메인 함수
// module.exports = function solution (N, road, K) {
//   const ables = Array(N).fill(0);
//   const stack = [[1, 0, Array(N).fill(0)]];

//   while (stack.length) {
//     const [cur, sum, visited] = stack.pop();
//     ables[cur - 1] = 1;
//     const reachables = filterRoad(cur, sum, road, visited, K);
//     stack.push(...reachables);
//   }
//   return ables.filter((el) => el).length;
// };

// // 현위치에서 갈 수 있는 모든 마을을 찾는 모듈
// function filterRoad (cur, sum, road, visited, K) {
//   const reachables = [];

//   for (const i in road) {
//     const [first, second, weight] = road[i];

//     if (sum + weight <= K) {
//       if (first === cur && !visited[second - 1]) {
//         const arr = [...visited];
//         arr[second - 1] = 1;
//         reachables.push([second, sum + weight, arr]);
//       }
//       if (second === cur && !visited[first - 1]) {
//         const arr = [...visited];
//         arr[first - 1] = 1;
//         reachables.push([first, sum + weight, arr]);
//       }
//     }
//   }
//   return reachables;
// }

// ver3
// 최소거리 고려해서 재작성

module.exports = function solution(N, road, K) {
  const graph = {};
  for (let i = 1; i <= N; i++) {
    graph[i] = [];
  }
  const path = Array(N + 1).fill(500001);
  path[0] = 0;

  for (let i = 0; i < road.length; i++) {
    const [a, b, weight] = road[i];
    graph[a].push([b, weight]);
    graph[b].push([a, weight]);
  }

  let needVisit = [[1, 0, 0]]; // queue [노드번호, 가중치, 직전노드]
  const visited = Array(N + 1).fill(0);

  while (needVisit.length) {
    const needVisitCosts = needVisit.map((el) => path[el[2]] + el[1]);
    const minCost = Math.min(...needVisitCosts);
    const minIdx = needVisitCosts.indexOf(minCost);

    const [cur, weight, prev] = needVisit[minIdx];
    needVisit.splice(minIdx, 1);

    if (!visited[cur] && path[prev] + weight <= K) {
      path[cur] = path[prev] + weight;
      visited[cur] = 1;
      if (path[cur] === K) continue;

      let reachables = [];
      for (let el of graph[cur]) {
        if (!visited[el[0]]) reachables.push([...el, cur]);
      }
      needVisit.push(...reachables);
    }
  }
  return visited.filter((el) => el).length;
};
