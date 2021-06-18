// 프로그래머스 베스트앨범

// [{'장르' :[총재생횟수, [[1, 노래1], [2, 노래2], ...]]}]
// 노래정렬기준 1. 재생횟수 내림차순 2. 고유번호 오름차순

function solution(genres, plays) {
  let obj = {};
  genres.map((_, i) => (obj[genres[i]] = [0, []]));
  genres.map((_, i) => {
    obj[genres[i]][0] += plays[i];
    obj[genres[i]][1].push([i, plays[i]]);
  });
  genres.map((_, i) => {
    obj[genres[i]][1].sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      else return b[1] - a[1];
    });
    obj[genres[i]][1].splice(2, 1);
  });

  let arr = [];
  for (let key in obj) {
    arr.push([key, obj[key][0]]);
  }
  arr.sort((a, b) => b[1] - a[1]);
  let ans = [];
  arr.map((_, i) => ans.push(...obj[arr[i][0]][1]));
  return ans.map((el) => el[0]);
}
