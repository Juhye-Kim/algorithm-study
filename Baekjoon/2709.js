// 블랙잭

function solution(input) {
  // var input = require("fs").readFileSync("/dev/stdin").toString().split(" ");
  var [nm, list] = input.split("\n");
  let [n, m] = nm.split(" ");
  let cards = list.split(" ");
  cards = cards.map((el) => Number(el));
  cards.sort((a, b) => a - b);

  let max = 0; // 가장 가까운 합
  aux([], 0);

  function aux(arr, sum) {
    if (sum > m) return;
    if (arr.length === 3) {
      if (m - sum < m - max) max = sum;
      return;
    }

    for (let i = 0; i < cards.length; i++) {
      if (!arr.includes(cards[i])) {
        aux([...arr, cards[i]], sum + cards[i]);
      }
    }
  }
  return max;
}

let input = `5 21
5 6 7 8 9`;
console.log(solution(input)); //21

input = `10 500
93 181 245 214 315 36 185 138 216 295`;
console.log(solution(input)); //497
