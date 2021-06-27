/* 순차탐색 (Sequential Search)
  - 리스트를 앞에서부터 하나씩 차례로 탐색하는 방법
    -> 보통, 정렬되지 않은 리스트를 탐색할 때 사용
  - 장점 : 리스트가 아무리 커도, 시간만 있으면 무조건 데이터를 찾을 수 있음
*/

function seqSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return `${i + 1} 번째`;
  }
}

console.log(seqSearch([1, 4, 2, 5, 8], 2));
