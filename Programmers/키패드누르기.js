// 프로그래머스 키패드 누르기

function solution(numbers, hand) {
  let answer = "";
  let l = [3, 0];
  let r = [3, 2];

  numbers.forEach((num) => {
    if (num === 0) num = 11;
    if (num % 3 === 1) {
      answer += "L";
      l = [parseInt((num - 1) / 3), 0];
    } else if (num % 3 === 0) {
      answer += "R";
      r = [parseInt((num - 1) / 3), 2];
    } else {
      let cur = [parseInt((num - 1) / 3), 1];
      if (
        Math.abs(l[0] - cur[0]) + Math.abs(l[1] - cur[1]) ===
        Math.abs(r[0] - cur[0]) + Math.abs(r[1] - cur[1])
      ) {
        if (hand === "right") {
          answer += "R";
          r = cur;
        } else {
          answer += "L";
          l = cur;
        }
      } else if (
        Math.abs(l[0] - cur[0]) + Math.abs(l[1] - cur[1]) >
        Math.abs(r[0] - cur[0]) + Math.abs(r[1] - cur[1])
      ) {
        answer += "R";
        r = cur;
      } else {
        answer += "L";
        l = cur;
      }
    }
  });
  return answer;
}
