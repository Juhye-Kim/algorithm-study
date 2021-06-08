// 기능개발

// dates(스택)에 배포가능한 날짜 담고, 배포 가능한 요소들을 한번에 여러개씩 꺼냄
// 가장 위에있는 요소(pointer)를 기준으로 차례로 꺼냄, 이 때 pointer보다 빨리 배포될수 있는 요소들은 함께 꺼냄

module.exports = function solution(progresses, speeds) {
  const answer = [];
  const dates = [];
  let cnt = 0; // 한번에 배포되는 기능 개수 (answer배열에 추가될 것)

  // 배포되는 날짜를 dates 배열에 담음 (stack 구조)
  for (let i = progresses.length - 1; i >= 0; i--) {
    dates.push(Math.ceil((100 - progresses[i]) / speeds[i])); // 밤에 배포되기때문에 올림처리
  }

  let pointer = dates[dates.length - 1];

  while (dates.length > 0) {
    // 배포 불가능한 요소를 만나면 cnt를 answer배열에 넣고 초기화, 배포 불가능한 요소는 새로운 pointer가 됨
    if (pointer < dates[dates.length - 1]) {
      answer.push(cnt);
      cnt = 0;
      pointer = dates[dates.length - 1];
      // 함께 배포 가능한 요소면 계속 꺼내고, 한번에 배포되는 기능 수 증가
    } else {
      dates.pop();
      cnt++;
    }
  }
  answer.push(cnt); // 마지막날 처리되는 기능 수
  return answer;
};
