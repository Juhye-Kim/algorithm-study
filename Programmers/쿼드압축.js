// 프로그래머스 - 쿼드압축 후 개수 세기

// 배열을 네부분으로 쪼개서 재귀적으로 확인
// 쪼개기 (왼쪽위 / 오른쪽위 / 왼쪽아래 / 오른쪽아래)
// 배열 시작점(x,y), 쪼개질 사각형의 한 변 길이(size)
// arr에서 x,y를 기준으로 size만큼만 확인
// 쪼갠 부분배열의 모든 원소의 합을 구하고, 값을 확인해 계속쪼갤지 종료할지 결정

// 재귀 종료조건
// 1. 쪼갠 부분의 모든 요소가 0일때
//   -> result 배열 0개수 + 1, 더이상 쪼갤 필요 X -> 종료
// 2. 쪼갠 부분의 모든 요소가 1일때
//   -> result 배열 1개수 + 1, 더이상 쪼갤 필요 X -> 종료
// 3. 크기가 2*2 일때 (size = 2)
//   -> 한번더 쪼개면 1*1로 개별요소가 되니까 더이상 쪼갤필요 X
//   -> 최종 0, 1의 개수를 result 배열에 반영, 종료
//   -> 1 개수 = 모든 요소 합(sum) (모든 요소를 더할 때, 1일 경우에만 값이 증가하니까)
//   -> 0 개수 = 모든 요소 개수 - 1의 개수 = 모든 요소의 개수 - 모든 요소 합(sum)

module.exports = function solution(arr) {
  const result = [0, 0];
  devide(0, 0, arr.length);

  function devide(x, y, size) {
    let sum = 0;
    for (let i = y; i < y + size; i++) {
      for (let j = x; j < x + size; j++) {
        sum += arr[i][j];
      }
    }

    if (sum === 0) {
      result[0]++;
      return;
    }
    if (sum === size * size) {
      result[1]++;
      return;
    }
    if (size === 2) {
      result[0] += size * size - sum;
      result[1] += sum;
      return;
    }

    const newSize = size / 2;
    devide(x, y, newSize); // 왼쪽위
    devide(x, y + newSize, newSize); // 오른쪽위
    devide(x + newSize, y, newSize); // 왼쪽아래
    devide(x + newSize, y + newSize, newSize); // 오른쪽아래
  }
  return result;
};
