// 프로그래머스 - 타겟 넘버

// 재귀를 이용해 numbers배열의 가능한 모든 계산결과를 구하고, target과 비교한다.
// index = 0, sum(누적합) = 0 으로 시작한다.
// 재귀호출이 일어날 때마다
//  -> index는 1씩 증가하고
//  -> sum에는 새로운 값이 1) 더해지거나 2) 빼진다.

// 1. 종료 조건
// numbers 배열 모든 요소 계산이 끝났을 때 (index가 배열 마지막 값일때)
// -> (최종계산 결과 = target) 이면 방법수 + 1

// 2. 일반 경우
// 2-1. 누적합(sum)에 현재 index에 해당하는 값을 더한다.
// 2-2. 누적합(sum)에서 현재 index에 해당하는 값을 뺀다.

module.exports = function solution(numbers, target) {
  let result = 0;
  calc(0, 0);

  function calc(idx, sum) {
    if (idx === numbers.length - 1) {
      if (sum + numbers[idx] === target || sum - numbers[idx] === target) {
        result++;
      }
      return;
    }

    calc(idx + 1, sum + numbers[idx]);
    calc(idx + 1, sum - numbers[idx]);
  }
  return result;
};
