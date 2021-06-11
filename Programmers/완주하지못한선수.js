function solution(participant, completion) {
  var answer = "";
  let arr = {};

  for (let i in participant) {
    if (arr[participant[i]]) {
      arr[participant[i]] = arr[participant[i]] + 1;
    } else {
      arr[participant[i]] = 1;
    }
  }

  for (let el of completion) {
    arr[el] = arr[el] - 1;
  }

  for (let i in arr) {
    if (arr[i] > 0) {
      answer = i;
      break;
    }
  }
  return answer;
}
