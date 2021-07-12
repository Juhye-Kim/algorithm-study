/** 코딜리티 - MaxCounters */

// timeout
function solution(N, A) {
  let arr = Array(N).fill(0);
  let max = 0;
  A.forEach((n) => {
    if (n > N) arr = Array(N).fill(max);
    else {
      arr[n - 1]++;
      if (max < arr[n - 1]) max = arr[n - 1];
    }
  });
  return arr;
}

// ver2
function solution(N, A) {
  let arr = Array(N).fill(0);
  let maxCount = 0;
  let max = 0;
  A.forEach((n) => {
    if (arr[n - 1] < maxCount) arr[n - 1] = maxCount;
    if (n > N) maxCount = max;
    else {
      arr[n - 1]++;
      if (max < arr[n - 1]) max = arr[n - 1];
    }
  });

  return arr.map((el) => {
    if (el < maxCount) return maxCount;
    else return el;
  });
}

// ver3
function solution(N, A) {
  let [max, maxCnt] = [0, 0];
  let arr = Array(N + 1).fill(0);
  for (let i = 0; i < A.length; i++) {
    if (A[i] === N + 1) maxCnt = max;
    else {
      arr[A[i]] = Math.max(maxCnt, arr[A[i]]);
      arr[A[i]]++;
      max = Math.max(max, arr[A[i]]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.max(maxCnt, arr[i]);
  }
  return arr.slice(1);
}
