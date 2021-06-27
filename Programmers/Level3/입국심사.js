// 입국심사

// ver1. 모든 조합 구하기
// 모든 가능한 심시관 조합 구해서, 최소시간 구하기 -> 시간 초과
module.exports = function solution(n, times) {
  times.sort((a, b) => a - b);
  const coms = [];
  com([], n);

  function com(arr, num) {
    if (arr.length === times.length - 1) {
      arr.push(num);
      coms.push(arr);
      return;
    }
    for (let i = 0; i <= num; i++) {
      com([...arr, i], num - i);
    }
  }

  let min = Infinity;
  for (let i = 0; i < coms.length; i++) {
    let max = 0;
    for (let j = 0; j < coms[i].length; j++) {
      if (max < coms[i][j] * times[j]) max = coms[i][j] * times[j];
    }
    if (max < min) min = max;
  }
  return min;
};

// ver2. 이진탐색
// 1. 심사관들을 심사시간 순으로 내림차순 정렬한다. (times)
// 2. 심사하는데 걸리는 최대 시간을 구한다.
//     = 모두가 제일 오래걸리는 심사관 시간한테 심사 받는 경우
//     = 제일 오래걸리는 심사관 시간(times[0]) * 전체인원(n)
// 3. 1 ~ times[0] * n 을 범위로 잡고, 가능한 시간의 범위를 반으로 줄여가며 이진탐색
//    (범위의 중간값을 심사시간으로 가정, 그 시간내에 n명의 심사가 가능한지 확인)

//    3-1. 가능한 범위를 줄여나가는 로직
//    범위시작 = start, 범위끝 = end, 체크대상 = middle
//    ex. 최대시간이 6인 경우
//        1 ~ 6 -> start = 1, middle = 4, end = 6 -> 4분만에 가능
//        1 ~ 4 -> start = 1, middle = 3, end = 4 -> 3분만에 불가능
//        4 ~ 4 -> start = 3, middle = 4, end = 4 -> middle = end 면 종료 (더이상 탐색할 숫자 X)

//    3-2. 가능여부 체크 로직
//    심사시간 / 심사관 1명 심사시간 = 심사관 1명이 심사가능한 최대 인원
//    -> 이 최대인원이 n보다 크거나 같으면, 시간내에 심사가 가능한 것!

module.exports = function solution(n, times) {
  times.sort((a, b) => b - a);
  let [start, middle, end] = [1, Math.ceil((times[0] * n) / 2), times[0] * n];

  while (start < middle && middle < end) {
    let sum = 0;
    for (let i = 0; i < times.length; i++) {
      sum += parseInt(middle / times[i]);
    }
    if (sum >= n) [middle, end] = [Math.ceil((start + middle) / 2), middle];
    else [start, middle] = [middle, Math.ceil((middle + end) / 2)];
  }
  return middle;
};
