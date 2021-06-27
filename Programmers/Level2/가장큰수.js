// 프로그래머스 가장 큰 수

// ver1
function solution(numbers) {
  let answer = "";
  numbers.sort((a, b) => a - b);
  numbers = numbers.map((num) => num.toString());
  let len = numbers[numbers.length - 1].length;

  numbers = numbers.map((num) => {
    let str = num;
    while (str.length < len) {
      str += str.substr(str.length - 1);
    }
    return [num, str];
  });
  numbers.sort((a, b) => Number(b[1]) - Number(a[1]));
  numbers.forEach((num) => {
    answer += num[0];
  });
  return parseInt(answer) + "";
}

// ver2
function solution(numbers) {
  numbers.sort((a, b) => {
    return Number("" + b + a) - Number("" + a + b);
  });
  return numbers[0] === 0 ? "0" : numbers.join("");
}
