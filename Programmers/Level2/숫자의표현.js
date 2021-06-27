// 프로그래머스 - 숫자의 표현 (Level 2)

function solution(n) {
  let num = 0;
  let cnt = 1;

  while (true) {
    if (num * (num + 1) > n * 2) break;
    num++;
  }

  for (let i = 2; i < num; i++) {
    checkAll(i);
  }

  function checkAll(maxSize) {
    for (let i = 1; i < n; i++) {
      // 1~15까지
      let sum = 0;
      for (let j = i; j < maxSize + i; j++) {
        // maxSize개만큼
        sum += j;
        if (sum === n) {
          cnt++;
          return;
        }
        if (sum > n) return;
      }
    }
  }
  return cnt;
}

console.log(solution(15)); // 4
