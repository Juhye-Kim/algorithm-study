function solution(input) {
  // let [n, edge, ...arr] = require("fs")
  //   .readFileSync("/dev/stdin")
  //   .toString()
  //   .trim()
  //   .split("\n");
  let [n, edge, ...arr] = input.toString().trim().split("\n");
  arr = arr.map((el) => el.split(" "));

  let result = 0;
  let checked = Array(Number(n)).fill(false);
  checked[0] = true;

  const isEmpty = (Q) => Q.length === 0;

  const filterComputers = (arr, from) => {
    let reachables = [];
    let nextArr;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i].includes(from.toString())) {
        reachables.push(...arr[i].filter((el) => el !== from));
        nextArr = arr.filter((el, idx) => idx !== i);
      }
    }
    return [reachables, nextArr];
  };

  const Q = ["1"];

  while (!isEmpty(Q)) {
    let from = Q.shift();
    let [reachables, nextArr] = filterComputers(arr, from);

    arr = nextArr;
    reachables = reachables.filter((el) => !checked[Number(el) - 1]);
    if (reachables.length === 0) {
      console.log(result);
      return;
    }
    Q.push(...reachables);
    reachables.forEach((el) => (checked[Number(el) - 1] = true));
    result += reachables.length;
  }
  console.log(result);
  return;
}

let result = solution(`7
6
1 2
2 3
1 5
5 2
5 6
4 7`);
// console.log(result); // 4

result = solution(`5
4
1 2
1 3
2 4
3 5`);
// console.log(result); // 4

result = solution(`5
4 
5 2
4 2
3 2
1 2`);
// console.log(result); // 4
