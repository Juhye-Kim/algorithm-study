/* 피보나치 수열 구현
  1. 재귀
    - O(2^n)
    - 동일한 함수가 반복적으로 호출됨
  2. 메모이제이션 
    - 같은 연산은 한번만 수행
    - 재귀(상향식), 반복문(하향식)과 함께 쓰일 수 있음
 */

// 1. 재귀
function fibo(n) {
  if (n === 1 || n === 2) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

// 2. 메모이제이션 + 재귀
let memo = Array(100).fill(0);
function fibo(n) {
  if (n === 1 || n === 2) return 1;
  if (!memo[n]) memo[n] = fibo(n - 1) + fibo(n - 2);
  return memo[n];
}

// 3. 메모이제이션 + 반복문
let memo = Array(100).fill(0);
function fibo(n) {
  [memo[1], memo[2]] = [1, 1];
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
  }
  return memo[n];
}

console.log(fibo(10));
