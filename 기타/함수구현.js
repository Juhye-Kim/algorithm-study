// ver1. 객체 활용
function solution(arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) obj[arr[i]]++;
    else obj[arr[i]] = 1;
  }
  let answer = [];
  for (let key in obj) {
    if (obj[key] > 1) answer.push(obj[key]);
  }
  return answer.length === 0 ? [-1] : answer;
}

// ver2. Map 활용
function solution(arr) {
  let answer = [];
  let map = new Map();

  arr.forEach((el) => {
    if (!map.has(el)) map.set(el, 1);
    else map.set(el, map.get(el) + 1);
  });

  map.forEach((value) => {
    if (value > 1) answer.push(value);
  });
  return answer.length === 0 ? [-1] : answer;
}

// ver3. Set 활용
function solution(arr) {
  let answer = [];
  let set = new Set(arr);

  for (let el of set) {
    let count = countOf(arr, el);
    if (count > 1) answer.push(count);
  }
  if (answer.length === 0) answer.push(-1);
  return answer;
}

function countOf(arr, el) {
  return arr.filter((value) => value === el).length;
}

let arr = [1, 2, 3, 3, 3, 3, 4, 4];
console.log(solution(arr)); // [4, 2]

arr = [3, 2, 4, 4, 2, 5, 2, 5, 5];
console.log(solution(arr)); // [3, 2, 3]

arr = [3, 5, 7, 9, 1];
console.log(solution(arr)); // [-1]
