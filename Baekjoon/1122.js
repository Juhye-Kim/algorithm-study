const solution = (input) => {
  // var [a, b, k] = Number(require("fs").readFileSync("/dev/stdin").toString().split(' '));
  let [a, b, k] = input.split(" ");
  let result = 0;
  let arr = [...Array(Number(a)).fill(0), ...Array(Number(b)).fill(1)];

  while (true) {
    console.log("1개수", arr.filter((el) => el === 1).length);
    let copied = [...arr];
    let cnt = k;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
        if (cnt === 0) break;
        copied[i] = 1;
        cnt--;
        console.log("0발견", arr, copied);
        console.log("cnt 감소", cnt);
      }
    }
    if (cnt !== 0) {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
          if (cnt === 0) break;
          copied[i] = 0;
          cnt--;
          console.log("1발견", arr, copied);
          console.log("cnt 감소", cnt);
        }
      }
    }
    arr = [...copied];
    result++;
    if (arr.filter((el) => el === 0).length === 0) {
      return result + 1;
    }
    if (result === 5) return;
  }
  return result;
};

console.log(solution(`4 0 3`)); //4

// 0 * A개
// 1 * B개
// 모두 1로 만들기
// 턴마다 K개씩 뒤집음
// 최소로 뒤집기

// 0 0 0 0
