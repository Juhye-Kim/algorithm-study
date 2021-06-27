function solution(n, arr) {
  arr.sort((a, b) => a[1] - b[1]);
  arr.forEach((el) => {
    console.log(el[0]);
  });
}

solution(2, [
  ["홍길동", 95],
  ["이순신", 77],
]);
