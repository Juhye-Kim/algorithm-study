// 백준 패션왕 신해빈

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString();
  var [n, ...arr] = input.split("\n");
  n = Number(n);
  let m = 0;
  for (let i = 0; i < n; i++) {
    let map = new Map();
    for (let j = m + 1; j <= m + Number(arr[m]); j++) {
      let cloth = arr[j].split(" ")[1];
      if (!map.get(cloth)) map.set(cloth, 1);
      else map.set(cloth, map.get(cloth) + 1);
    }
    m += Number(arr[m]) + 1;
    let answer = 1;
    for (let value of map.values()) {
      answer *= value + 1;
    }
    console.log(answer - 1);
  }
}

let input = `2
3
hat headgear
sunglasses eyewear
turban headgear
3
mask face
sunglasses face
makeup face`;
console.log(solution(input)); //
