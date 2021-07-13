// 코딜리티 L5 - MinAvgTwoSlice

// ver1
function solution(A) {
  let minAvg = (A[0] + A[1]) / 2;
  let minIdx = 0;

  for (let i = 2; i < A.length; i++) {
    let avg1 = (A[i - 2] + A[i - 1] + A[i]) / 3;
    let avg2 = (A[i - 1] + A[i]) / 2;
    let min = Math.min(minAvg, avg1, avg2);
    if (minAvg > avg1) minIdx = i - 2;
    if (minAvg > avg2 && avg1 > avg2) minIdx = i - 1;
    minAvg = min;
  }
  return minIdx;
}

// ver2
function solution(A) {
  let dp = [];
  let [minIdx, minVal] = [0, (A[0] + A[1]) / 2];
  [dp[0], dp[1]] = [A[0], (A[0] + A[1]) / 2];

  for (let i = 2; i < A.length; i++) {
    dp[i] = Math.min((A[i - 1] + A[i]) / 2, (A[i - 2] + A[i - 1] + A[i]) / 3);
    if (dp[i] < minVal) {
      if ((A[i - 1] + A[i]) / 2 < (A[i - 2] + A[i - 1] + A[i]) / 3)
        minIdx = i - 1;
      else minIdx = i - 2;
      minVal = dp[i];
    }
  }
  return minIdx;
}
