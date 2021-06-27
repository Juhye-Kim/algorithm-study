function solution(n, arr) {
  arr.sort((a, b) => a - b);

  let [start, end] = [0, arr.length - 1];
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === n) return "yes";
    else if (arr[mid] > n) end = mid - 1;
    else start = mid + 1;
  }
  return "no";
}

console.log(solution(5, [10, 3, 7, 9, 2]));
console.log(solution(3, [5, 1, 9]));
