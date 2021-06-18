// 프로그래머스 약수의 개수와 덧셈

// ver 1
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (divisor(i) % 2 === 0) answer += i;
    else answer -= i;
  }
  return answer;
}

function divisor(n) {
  let cnt = 0;
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      if (i === Math.sqrt(n)) cnt++;
      else cnt += 2;
    }
  }
  return cnt;
}

// ver 2
// 제곱근이 정수 = 약수개수는 홀수
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if (Math.sqrt(i) % 1 === 0) answer -= i;
    else answer += i;
  }
  return answer;
}
