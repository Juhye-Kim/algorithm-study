// 프로그래머스 JadenCase 문자열 만들기

function solution(s) {
  let arr = s.split(" ");
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = 0; j < arr[i].length; j++) {
      if (j === 0) str += arr[i][j].toUpperCase();
      else str += arr[i][j].toLowerCase();
    }
    res.push(str);
  }
  return res.join(" ");
}
