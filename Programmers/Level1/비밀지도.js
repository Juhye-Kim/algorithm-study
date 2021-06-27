// 프로그래머스 비밀지도

function solution(n, arr1, arr2) {
  arr1 = arr1.map((el) => el.toString(2).padStart(n, "0").split(""));
  arr2 = arr2.map((el) => el.toString(2).padStart(n, "0").split(""));

  let res = [];
  for (let i = 0; i < n; i++) {
    let ans = "";
    for (let j = 0; j < n; j++) {
      if (arr1[i][j] == 0 && arr2[i][j] == 0) ans += " ";
      else ans += "#";
    }
    res.push(ans);
  }
  return res;
}
