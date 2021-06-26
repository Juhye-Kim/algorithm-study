/*  삽입정렬 구현
    => 데이터를 하나씩 확인하며, 각 데이터를 적절한 위치에 삽입 (선택정렬보다 효율적)
    1. 두번째 데이터부터 시작 (앞쪽 데이터들은 이미 정렬되어있다고 가정)
    2. 정렬된 앞쪽 배열의 적절한 위치에 삽입
 */

function solution(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      else break;
    }
  }
  return arr;
}

let input = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
console.log(solution(input));
