/* 리트코드 46. Permutations */

var permute = function (nums) {
  let ans = [];
  aux([]);
  return ans;
  function aux(arr) {
    if (arr.length === nums.length) {
      ans.push(arr);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (!arr.includes(nums[i])) aux([...arr, nums[i]]);
    }
  }
};
