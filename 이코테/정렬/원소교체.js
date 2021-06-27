function solution(n, k, arr1, arr2) {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => b - a);
  for (let i = 0; i < k; i++) {
    if (arr1[i] < arr2[i]) [arr1[i], arr2[i]] = [arr2[i], arr1[i]];
    else break;
  }
  return arr1.reduce((sum, cur) => sum + cur, 0);
}

console.log(solution(5, 3, [1, 2, 5, 4, 3], [5, 5, 6, 6, 5]));
