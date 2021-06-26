/*  선택정렬 구현 O(n^2)
    1. 가장 작은 데이터 선택 
    2. 맨앞 데이터와 바꾸기
    3. 두번째 작은 데이터 선택
    4. 두번째 데이터와 바꾸기
    ...
    => 가장 작은 데이터를 선택해, 앞으로 보내는 과정 반복 수행
*/

function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  return arr;
}

let input = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
console.log(solution(input));
