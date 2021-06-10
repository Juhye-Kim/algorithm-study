// 프로그래머스 - 모의고사

function solution(answers) {
  let first = [1, 2, 3, 4, 5]; // len = 5
  let second = [2, 1, 2, 3, 2, 4, 2, 5]; // len = 8
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // len = 10

  let score = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === first[i % 5]) score[0]++;
    if (answers[i] === second[i % 8]) score[1]++;
    if (answers[i] === third[i % 10]) score[2]++;
  }
  let res = [];
  score.forEach((el, idx) => {
    if (el === Math.max(...score)) res.push(idx + 1);
  });
  return res;
}
