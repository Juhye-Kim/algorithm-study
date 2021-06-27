// 프로그래머스 실패율

function solution(N, stages) {
  stages.sort((a, b) => a - b);
  let arr = Array(N + 1).fill(0);
  for (let i = 0; i < stages.length; i++) {
    arr[stages[i] - 1]++;
  }

  let sum = arr.reduce((prev, cur) => prev + cur, 0);
  let fails = Array(N + 1).fill(0);
  fails[0] = [1, arr[0], arr[0] / sum];
  for (let i = 1; i < arr.length; i++) {
    fails[i] = [
      i + 1,
      fails[i - 1][1] + arr[i],
      arr[i] / (sum - fails[i - 1][1]),
    ];
  }

  fails.splice(N, 1);
  fails.sort((a, b) => b[2] - a[2]);
  let res = [];
  for (let i = 0; i < N; i++) {
    res.push(fails[i][0]);
  }
  return res;
}
