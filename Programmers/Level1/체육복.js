// Greedy(탐욕법)

const solution = (n, lost, reserve) => {
  var answer = 0;
  let arr = Array(n).fill(1);
  reserve.map((el) => (arr[el - 1] = 2));
  lost.map((el) => (arr[el - 1] = arr[el - 1] - 1));

  for (let i = 0; i < n; i++) {
    // 앞에서 빌리기
    if (i > 0 && arr[i] === 0) {
      if (arr[i - 1] === 2) {
        arr[i - 1] = 1;
        arr[i] = 1;
      }
    }
    // 뒤에서 빌리기
    if (i < n && arr[i] === 0) {
      if (arr[i + 1] === 2) {
        arr[i] = 1;
        arr[i + 1] = 1;
      }
    }
  }

  answer = arr.filter((el) => el > 0).length;
  return answer;
};

let result = solution(5, [2, 4], [1, 3, 5], 5);
console.log(result); // 5

result = solution(5, [2, 4], [3]);
console.log(result); // 4

result = solution(8, [1, 2, 4, 6], [1, 2, 4, 6]);
console.log(result); // 8

result = solution(4, [4, 2], [1, 3]);
console.log(result); // 4

result = solution(12, [1, 2, 3, 4, 8, 9, 10, 11], [9, 10]);
console.log(result); // 6

result = solution(4, [3, 1, 2], [2, 4, 3]);
console.log(result); // 3

result = solution(4, [3, 1], [2, 4]);
console.log(result); // 4
