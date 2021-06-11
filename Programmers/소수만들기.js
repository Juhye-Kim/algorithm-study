// 프로그래머스 소수만들기

function solution(nums) {
  let res = 0;
  aux([], 0);
  function aux(arr, idx) {
    if (arr.length === 3) {
      let sum = arr.reduce((prev, cur) => prev + cur, 0);
      if (isSosu(sum)) res++;
      return;
    }
    for (let i = idx; i < nums.length; i++) {
      if (!arr.includes(nums[i])) aux([...arr, nums[i]], i);
    }
  }
  return res;
}

function isSosu(n) {
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}
