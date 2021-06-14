// 프로그래머스 후보키

function solution(relation) {
  let answer = [];
  let keys = Array(relation[0].length).fill(0);
  keys = keys.map((el, idx) => idx);

  for (let i = 1; i <= keys.length; i++) {
    com([], 0, i);
  }

  function com(arr, idx, n) {
    if (isUnique(arr) && isMinimal(arr, answer)) {
      answer.push(arr);
      return;
    }
    if (arr.length === n) return;
    for (let i = idx; i < keys.length; i++) {
      com([...arr, keys[i]], i + 1, n);
    }
  }

  // 유일성 검사
  function isUnique(arr) {
    const obj = {};
    for (let i = 0; i < relation.length; i++) {
      let key = "";
      for (let j = 0; j < arr.length; j++) {
        key += relation[i][arr[j]];
      }
      if (obj[key]) return false;
      else obj[key] = 1;
    }
    return true;
  }

  // 최소성 검사
  function isMinimal(arr, answer) {
    if (answer.length === 0) return true;
    for (let i = 0; i < answer.length; i++) {
      let res = false;
      for (let j = 0; j < answer[i].length; j++) {
        if (!arr.includes(answer[i][j])) res = true;
      }
      if (!res) return false;
    }
    return true;
  }
  return answer.length;
}
