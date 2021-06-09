// 프로그래머스 - 수식 최대화
// stack으로 구현
// 일단 계산식을 순회하며 하나씩 stack에 넣음
// 일치하는 기호 찾으면,
// 1. stack의 최근값을 뺀다.
// 2. stack의 최근값, 기호 다음값 -> 연산 수행후, 결과를 stack에 넣음
//    ex. [1, +, 2, -, 3] -> '+' 를 발견하면 stack에 있던 1을 빼고 3(1+2)을 넣음
// 3. pointer은 2 건너뜀

function solution(expression) {
  const expressions = expression.split(/([*+-])/);
  const orders = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "+", "*"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];
  let max = 0;

  // 연산자 우선순위 조합 선택
  for (let i = 0; i < 6; i++) {
    let arr = [...expressions];
    // 연산자 차례로 계산
    for (let j = 0; j < 3; j++) {
      // 계산식 순회, 요소 하나씩 stack에 담음
      const stack = [arr[0]];
      let ptr = 1;
      while (ptr < arr.length) {
        const exp = orders[i][j];
        if (arr[ptr] === exp) {
          // 일치 기호 찾으면
          const first = stack.pop(); // 스택 최근값과 기호 다음값 연산 수행, 스택에 담음
          if (exp === "+") stack.push(Number(first) + Number(arr[ptr + 1]));
          else if (exp === "-") {
            stack.push(Number(first) - Number(arr[ptr + 1]));
          } else if (exp === "*") {
            stack.push(Number(first) * Number(arr[ptr + 1]));
          }
          ptr += 2;
        } else {
          stack.push(arr[ptr]);
          ptr++;
        }
      }
      // arr 갱신 (하나의 기호로 계산한 결과 반영)
      arr = [...stack];

      // 절댓값 구한 후, 최댓값보다 크면 갱신
      const res = Math.abs(arr[0]);
      if (arr.length === 1 && max < res) max = res;
    }
  }
  return max;
}
