// 프로그래머스 - 큰 수 만들기

// ex. '1924' -> '94'
// 최대한 내림차순으로 만드는 문제
// = 순회하면서, 자기 앞에 자기보다 작은수들을 최대한 지우는 문제

// 1. 스택에 값을 담는다.
// 2. 스택의 위쪽부분부터 비교시작
//    자기보다 작은 값을 발견하면 제거, k는 1씩 감소
//   - 자기 이상의 값이면 빼지 못함
//   - 이미 k개만큼 제거했다면 더이상 빼지 못함

// 순회가 끝났는데 더이상 제거할게 없다 = 이미 내림차순으로 정렬되었다
// -> 끝에서 k개 제거 (앞쪽에 큰값들이 몰려있을 것)

module.exports = function solution(number, k) {
  let stack = [];
  for (let i = 0; i < number.length; i++) {
    while (stack[stack.length - 1] < number[i] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(number[i]);
  }
  stack = stack.slice(0, stack.length - k);
  return stack.join("");
};
