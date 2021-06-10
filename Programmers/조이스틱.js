// 프로그래머스 - 조이스틱

function solution(name) {
  let arr = Array(name.length).fill("A");
  let nameArr = name.split("");
  let res = 0;
  let ptr = 0;

  while (arr.join("") !== name) {
    if (nameArr[ptr] !== "A") {
      let code = nameArr[ptr].charCodeAt(0);
      res += Math.min(90 - code + 1, code - 65);
      arr[ptr] = nameArr[ptr];
    }
    if (arr.join("") === name) break;

    let idx = [ptr + 1, 20]; // index, 거리
    for (let i = 0; i < arr.length; i++) {
      if (nameArr[i] !== "A" && arr[i] === "A") {
        let min = Math.min(Math.abs(ptr - i), Math.abs(arr.length + ptr - i));
        if (min < idx[1]) idx = [i, min];
      }
    }
    ptr = idx[0];
    res += idx[1];
  }
  return res;
}
