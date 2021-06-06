const solution = (input) => {
  var input = Number(require("fs").readFileSync("/dev/stdin").toString());
  const coins = [500, 100, 50, 10, 5, 1];
  let remain = 1000 - input;
  let cnt = 0;

  for (let coin of coins) {
    let num = parseInt(remain / coin);
    remain -= coin * num;
    cnt += num;
  }
  return cnt;
};

console.log(solution(380)); //4
