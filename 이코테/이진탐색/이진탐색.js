/* 이진탐색 (Binary Search)
  - O(longN)
    데이터 개수 1,000만 이상이면 이진탐색 고려해보기
  - 정렬된 배열에서만 사용 가능
  - 탐색 범위를 절반씩 좁혀가며 탐색
  - 구현방법 1. 재귀 
  - 구현방법 2. 반복문
  
  1. 시작, 중간, 끝 변수 설정
  2. 찾으려는 데이터와 중간데이터를 반복 비교 (데이터 찾을 때까지)

*/

// 1. 재귀
function binarySearch(arr, target, start, end) {
  if (start > end) return;
  let mid = parseInt((start + end) / 2);

  if (arr[mid] === target) return mid;
  else if (arr[mid] > target) return binarySearch(arr, target, start, mid - 1);
  else return binarySearch(arr, target, mid + 1, end);
}

// 2. 반복문
function binarySearch(arr, target, start, end) {
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6], 3, 0, 6));
