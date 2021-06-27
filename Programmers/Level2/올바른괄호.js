// 프로그래머스 - 올바른 괄호

module.exports = function solution(s) {
  const stack = [];
  // 문자열을 순회하며 stack에 쌓다가, '(' 와 ')' 가 연속으로 등장하면 stack에서 꺼냄
  for (const el of s) {
    // case1. 짝이 맞는 상황 (stack 맨 마지막 요소가 '(', 현재 넣으려는 요소는 ')')
    // => 맨 마지막요소는 꺼내고, 넣으려던 요소는 넣지 않음
    if (el === ")" && stack[stack.length - 1] === "(") {
      stack.pop();
      // case2. 짝이 맞지 않는 경우
      // => stack에 요소를 넣기만함
    } else {
      stack.push(el);
    }
  }
  // stack이 비었다면(길이 0) 모두 짝이맞는 경우이므로 true, 아니면 false를 반환
  return stack.length === 0;
};
