// 프로그래머스 - 소수 찾기

function solution(numbers) {
  const nums = numbers.split("");
  const sosu = [];

  for (let i = 1; i <= nums.length; i++) {
    dfs(0, nums, [], i);
  }

  function dfs(depth, nums, arr, stop) {
    if (arr.length === stop) {
      const n = parseInt(arr.join(""));
      if (isSosu(n) && !sosu.includes(n)) {
        sosu.push(n);
      }
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== -1) {
        const newNums = [...nums];
        newNums[i] = -1;
        const newArr = [...arr, nums[i]];
        dfs(depth + 1, newNums, newArr, stop);
      }
    }
  }
  return sosu.length;
}

function isSosu(n) {
  if (n < 2) return false;
  if (n !== 2 && n % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

let result = solution("17"); // 3
console.log(result);
result = solution("011"); // 2
console.log(result);
