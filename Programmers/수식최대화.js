function solution(expression) {
  let expressions = expression.split(/([*+-])/);
  let orders = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "+", "*"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];
  let max = 0;

  for (let i = 0; i < 6; i++) {
    let arr = [...expressions];
    for (let j = 0; j < 3; j++) {
      let stack = [arr[0]];
      let ptr = 1;
      while (ptr < arr.length) {
        let 기호 = orders[i][j];
        if (arr[ptr] === 기호) {
          let first = stack.pop();
          if (기호 === "+") stack.push(Number(first) + Number(arr[ptr + 1]));
          else if (기호 === "-")
            stack.push(Number(first) - Number(arr[ptr + 1]));
          else if (기호 === "*")
            stack.push(Number(first) * Number(arr[ptr + 1]));
          ptr += 2;
        } else {
          stack.push(arr[ptr]);
          ptr++;
        }
      }
      arr = [...stack];

      let res = Math.abs(arr[0]);
      if (arr.length === 1 && max < res) max = res;
    }
  }
  return max;
}

console.log(solution("100-200*300-500+20"));
