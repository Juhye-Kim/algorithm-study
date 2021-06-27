// 프로그래머스 N개의 최소공배수

function solution(arr) {
  arr.sort((a, b) => a - b);
  while (arr.length > 1) {
    let second = arr.pop();
    let first = arr.pop();
    arr.push(getLCM(first, second));
  }
  return arr[0];
}

function getLCM(first, second) {
  let GCD = 1;
  while (first !== 1) {
    for (let i = 2; i <= first; i++) {
      if (first % i === 0 && second % i === 0) {
        GCD *= i;
        [first, second] = [first / i, second / i];
        break;
      }
      if (i === first) return GCD * first * second;
    }
  }
  return GCD * first * second;
}
