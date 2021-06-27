/*  퀵정렬 구현
    => 기준(pivot) 데이터를 정하고, 그 기준보다 작은데이터/큰데이터 위치 교환
    
    1. 기준 설정 (pivot)
    2. 큰 수, 작은 수 교환
    3. 리스트를 반으로 나눔

    호어 분할(Hoare Partition) 방식
    - 첫번쨰 데이터를 pivot으로 정함

    1. 분할 (Divide, Partition)
    1-1. 첫번째 데이터를 피벗으로 설정
    1-2. 왼쪽부터 pivot보다 큰 데이터 찾기 & 오른쪽부터 pivot보다 작은 데이터 찾기 => 교환
    1-3. 값이 엇갈릴때까지 수행, 최종값은 pivot과 교환

    2. 왼쪽에서 1번 반복
    3. 오른쪽에서 1번 반복

 */

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  let pivot = arr[0];
  let tail = arr.slice(1);
  let left = tail.filter((el) => el <= pivot);
  let right = tail.filter((el) => el > pivot);
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let input = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
console.log(quickSort(input));
