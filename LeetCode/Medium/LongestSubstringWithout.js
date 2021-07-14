/* LeetCode 3. Longest Substring Without Repeating Characters (문자열) */

// ver1. 412ms
var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let i = 0;
  while (i < s.length) {
    let j = i;
    let map = new Map();
    let cnt = 0;
    while (s[j] && !map.get(s[j])) {
      map.set(s[j], 1);
      j++;
      cnt++;
    }
    ans = Math.max(ans, cnt);
    i++;
  }
  return ans;
};

// ver2. 216ms

var lengthOfLongestSubstring = function (s) {
  let ans = 0;
  let exist = {};
  let right = 0;
  for (let left = 0; left < s.length; left++) {
    while (right < s.length && !exist[s[right]]) {
      exist[s[right]] = true;
      right++;
    }
    ans = Math.max(ans, right - left);
    exist[s[left]] = false;
  }
  return ans;
};
