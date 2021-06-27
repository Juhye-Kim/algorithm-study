// ver 1
function solution(n, m, arr) {
  arr.sort((a, b) => a - b);
  let [start, end] = [0, arr.length - 1];
  let mid;
  while (start <= end) {
    mid = parseInt((start + end) / 2);
    if (cut(arr, arr[mid]) === m) return arr[mid];
    else if (cut(arr, arr[mid]) > m) end = mid - 1;
    else start = mid + 1;
  }
  let answer = arr[mid];
  for (let i = arr[mid]; i < arr[mid + 1]; i++) {
    if (cut(arr, i) > m) answer++;
    else break;
  }
  return answer;
}

// 자른 떡 길이 계산
function cut(arr, len) {
  return arr.reduce((sum, ttuck) => {
    if (ttuck > len) return sum + ttuck - len;
    else return sum;
  }, 0);
}

// ver 2
function solution(n, m, arr) {
  arr.sort((a, b) => a - b);
  let [start, end] = [0, arr[arr.length - 1]];
  let result = 0;
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (cut(arr, mid) < m) end = mid - 1;
    else {
      result = mid;
      start = mid + 1;
    }
  }
  return result;
}

console.log(solution(4, 6, [19, 15, 10, 17]));
