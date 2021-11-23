// 프로그래머스 위장 (해시)

// ver1. 조합
// 1. 해시테이블 생성
// {종류1 : [의상1, 의상2, ..],
//  종류2 : [의상1] }
// 2. 모든 종류조합 구하기
// [[종류1], [종류2], [종류1, 종류2]]
// 3. 조합별로 의상조합 구해서 모두 더하기
// ex. [종류1] => 종류1 의상개수
//     [종류1, 종류2] -> 종류1 의상개수 * 종류2 의상개수

// ver2
// 그런데 하다보니 모든 조합을 구할 필요가 없었음
// 1. 해시테이블 생성 (각 종류별로, 안입는 경우 추가)
// {종류1 : [안입기, 의상1, 의상2, ..],
//  종류2 : [안입기, 의상1]}
// 2. 모든 경우의 수 구하기
// res = 종류1 의상개수 * 종류2 의상개수 * ...
// 3. 모든종류를 안입는 경우 빼기 (1가지)
// res - 1

function solution(clothes) {
  // hash table 생성
  const hash = {};
  for (let i = 0; i < clothes.length; i++) {
    if (!hash[clothes[i][1]]) hash[clothes[i][1]] = [];
    hash[clothes[i][1]].push(clothes[i][0]);
  }
  const keys = Object.keys(hash);
  const comArr = [];
  for (let i = 1; i <= keys.length; i++) {
    com([], 0, i);
  }

  // 모든 key조합 구하기
  function com(arr, idx, n) {
    if (arr.length === n) {
      comArr.push(arr);
      return;
    }
    for (let i = idx; i < keys.length; i++) {
      com([...arr, keys[i]], i + 1, n);
    }
  }

  // key조합별 내적 구하기
  let res = 0;
  for (let i = 0; i < comArr.length; i++) {
    let prod = 1;
    for (let j = 0; j < comArr[i].length; j++) {
      prod *= hash[comArr[i][j]].length;
    }
    res += prod;
  }
  return res;
}

// ver2
// 1. 해시테이블 생성 (각 종류별로, 안입는 경우 추가)
// {종류1 : [안입기, 의상1, 의상2, ..],
//  종류2 : [안입기, 의상1]}
// 2. 모든 경우의 수 구하기
// res = 종류1 의상개수 * 종류2 의상개수 * ...
// 3. 모든종류를 안입는 경우 빼기 (1가지)
// res - 1

function solution(clothes) {
  const hash = {};
  for (let i = 0; i < clothes.length; i++) {
    if (!hash[clothes[i][1]]) hash[clothes[i][1]] = [];
    hash[clothes[i][1]].push(clothes[i][0]);
  }
  let res = 1;
  for (let key in hash) {
    res *= hash[key].length + 1;
  }
  return res - 1;
}

// ver3
// Map 활용
function solution(clothes) {
  let map = new Map();

  clothes.forEach(([_, type]) => {
    if (!map.get(type)) map.set(type, 1);
    else map.set(type, map.get(type) + 1);
  });

  let result = 1;
  for (let c of map) result *= c[1] + 1;
  return result - 1;
}
