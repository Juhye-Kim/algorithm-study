// 최대 힙

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var [n, ...arr] = input.split("\n");
  arr = arr.map((el) => Number(el));
  let heap = [0];
  for (let i = 0; i < n; i++) {
    if (arr[i] === 0) {
      if (heap.length === 1) console.log(0);
      else {
        console.log(heap[1]); // 최댓값 출력
        [heap[1], heap[heap.length - 1]] = [heap[heap.length - 1], heap[1]];
        heap.pop(); // 최댓값 제거
        let min = 1;
        while (true) {
          if (heap[min] < heap[min * 2]) {
            [heap[min], heap[min * 2]] = [heap[min * 2], heap[min]];
            min = min * 2;
          } else if (heap[min] < heap[min * 2 + 1]) {
            [heap[min], heap[min * 2 + 1]] = [heap[min * 2 + 1], heap[min]];
            min = min * 2 + 1;
          } else break;
        }
      }
    } else {
      heap.push(arr[i]);
      let node = heap.length - 1;
      let parent = parseInt(node / 2);
      while (true) {
        if (parent !== 0 && heap[parent] < arr[i]) {
          [heap[parent], heap[node]] = [heap[node], heap[parent]];
          node = parent;
        } else break;
      }
    }
  }
}

let input = `13
0
1
2
0
0
3
2
1
0
0
0
0
0`;
console.log(solution(input));
