// 프로그래머스 - 구명보트

function solution(people, limit) {
  let res = 0;
  people.sort((a, b) => b - a);

  let head = 0;
  let tail = people.length - 1;
  while (people[head] > limit / 2) {
    if (people[head] + people[tail] <= limit) {
      head++;
      tail--;
    } else {
      head++;
    }
    res++;
  }
  return res + Math.ceil((tail - head + 1) / 2);
}
