// 1~num 곱 출력
function solution(num) {
  // 1! => 1
  // 2! => 2 * 1!
  // 3! => 3 * 2!
  // 4! => 4 * 3!
  let result = 1;
  factorial(num);

  function factorial(n) {
    if (n === 1) return 1;
    factorial(n - 1);
  }
  return result;
}

console.log(solution(5));
