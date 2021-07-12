// 코딜리티 Lesson2 - OddOccurrencesInArray

function solution(A) {
  let obj = {};
  A.forEach((n) => {
    if (!obj[n]) obj[n] = 1;
    else obj[n]++;
  });
  for (let key in obj) {
    if (obj[key] % 2 !== 0) return Number(key);
  }
}

function solution(A) {
  let hash = {};
  for (let i in A) {
    hash[A[i]] === undefined
      ? (hash[A[i]] = false)
      : (hash[A[i]] = !hash[A[i]]);
  }
  for (let key in hash) {
    if (!hash[key]) return Number(key);
  }
}
