function solution(n, k) {
  let cnt = 0;

  while (n > 1) {
    if (n % k === 0) n /= k;
    else n -= 1;

    cnt++;
  }

  return cnt;
}

console.log(solution(25, 5)); // 2
console.log(solution(25, 3)); // 6
