// 프로그래머스 튜플

// ver1.
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

// ver2.
function solution(s) {
  const arr = convertToArray(s);

  let result = [];
  arr.forEach((el) => {
    el.forEach((n) => {
      if (!result.includes(n)) result.push(n);
    });
  });
  return result;
}

function convertToArray(s) {
  return s
    .substring(2, s.length - 2)
    .split("},{")
    .map((el) => el.split(",").map((n) => Number(n)))
    .sort((a, b) => a.length - b.length);
}
