/* Codility StoneWall */
// ver1
function solution(H) {
  let cnt = 1;
  let stack = [H[0]];
  let i = 1;
  while (i < H.length) {
    let top = stack[stack.length - 1];
    if (top > H[i]) {
      stack.pop();
      i--;
    } else if (!stack.length || top < H[i]) {
      stack.push(H[i]);
      cnt++;
    }
    i++;
  }
  return cnt;
}

// ver 2
function solution(H) {
  let ans = 1;
  let stack = [H[0]];
  for (let i = 1; i < H.length; i++) {
    while (stack.length && stack[stack.length - 1] > H[i]) {
      stack.pop();
    }
    if (stack[stack.length - 1] !== H[i]) {
      stack.push(H[i]);
      ans++;
    }
  }
  return ans;
}
