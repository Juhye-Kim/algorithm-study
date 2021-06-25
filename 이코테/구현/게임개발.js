function solution(input) {
  let [SIZE, POS, ...MAP] = input.split("\n");
  SIZE = SIZE.split(" ").map((el) => Number(el));
  POS = POS.split(" ").map((el) => Number(el));
  MAP = MAP.map((el) => el.split(" ").map((el) => Number(el)));
  let answer = 1;

  const MOVE = [
    [-1, 0],
    [0, -1],
    [1, 0],
    [0, 1],
  ];

  MAP[POS[0]][POS[1]] = 2;
  while (true) {
    let allVisited = true;
    for (let i = 0; i < 4; i++) {
      // 1. 왼쪽으로 회전
      POS[2] = (POS[2] + 1) % 4;
      // 가보지 않았다면 - 전진
      let nx = POS[0] + MOVE[POS[2]][0];
      let ny = POS[1] + MOVE[POS[2]][1];
      if (
        0 < nx &&
        nx <= SIZE[0] &&
        0 < ny &&
        ny <= SIZE[1] &&
        MAP[nx] &&
        MAP[nx][ny] < 1
      ) {
        POS[0] = nx;
        POS[1] = ny;
        MAP[POS[0]][POS[1]] = 2;
        answer++;
        allVisited = false;
        break;
      }
    }
    // 네방향 다 가보거나, 바다라면
    if (allVisited) {
      // 방향유지 + 한칸 뒤로가서 다시 수행
      let nx = POS[0] - MOVE[POS[2]][0];
      let ny = POS[1] - MOVE[POS[2]][1];
      // 뒤쪽이 바다면 return;
      if (MAP[nx][ny] === 1) {
        return answer;
      }
      POS[0] = nx;
      POS[1] = ny;
    }
  }
}

let input = `4 4
1 1 0
1 1 1 1
1 0 0 1
1 1 0 0
1 1 1 1`;
console.log(solution(input)); // 4

input = `3 3
1 1 0
1 1 1
1 0 0
1 1 0`;
console.log(solution(input)); // 3
