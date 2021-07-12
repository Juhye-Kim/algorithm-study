/* 코딜리티 L5 - PassingCars */

function solution(A) {
  let [sum, cnt] = [0, 0];
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) cnt++;
    else sum += cnt;
    if (sum > 1000000000) return -1;
  }
  return sum;
}

function solution(A) {
  let total = A.filter((el) => el === 1).length;
  let sum = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) sum += total;
    if (A[i] === 1) total--;
    if (sum > 1000000000) return -1;
  }
  return sum;
}
