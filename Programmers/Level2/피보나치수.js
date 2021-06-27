// 프로그래머스 - 피보나치 수

// 현재값 = (현재위치 - 1)값 + (현재위치 - 2) 값을 구해야 함
// [0, 1, 1, 2, 3, 5 ...] 결과는 이런 모양

// 규칙
// 조건 1. n = 0, 1 이면 각각 0, 1을 저장
// 조건 2. n >=2 부터는 n-1 값, n-2 값을 더한 것을 저장

module.exports = function solution(n) {
  const arr = [];
  for (let i = 0; i <= n; i++) {
    if (i <= 1) arr[i] = i;
    else arr[i] = (arr[i - 1] + arr[i - 2]) % 1234567;
  }
  return arr[n];
};
