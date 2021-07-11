/* 프로그래머스 - 완주하지 못한 선수 (해시) */

// ver2
function solution(participant, completion) {
  let parts = {};
  participant.forEach((p) => (parts[p] ? parts[p]++ : (parts[p] = 1)));
  completion.forEach((c) => parts[c]--);
  for (let i in parts) {
    if (parts[i] > 0) return i;
  }
}

// ver1
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
