// 프로그래머스 튜플

function solution(s) {
  let map = new Map();
  let answer = [];
  let tuples = s.substr(2, s.length - 4).split("},{");
  tuples = tuples.map((n) => n.split(",").map((el) => Number(el)));
  tuples.sort((a, b) => a.length - b.length);
  tuples.forEach((tuple) => tuple.forEach((num) => map.set(num, 1)));

  for (let key of map.keys()) {
    answer.push(key);
  }
  return answer;
}
