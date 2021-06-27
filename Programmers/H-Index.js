// 프로그래머스 H-Index

// ver1
function solution(citations) {
  var answer = 0;
  while (answer <= citations.length) {
    if (citations.filter((el) => el > answer).length <= answer) break;
    answer++;
  }
  return answer;
}

// ver2
function solution(citations) {
  let hIndex = 0;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; i++) {
    if (hIndex < citations[i]) hIndex++;
    else break;
  }
  return hIndex;
}
