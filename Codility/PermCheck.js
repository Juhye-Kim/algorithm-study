/** 코딜리티 - PermCheck */

function solution(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) return 0;
  }
  return 1;
}
