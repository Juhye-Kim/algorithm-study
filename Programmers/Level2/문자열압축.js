function solution(s) {
  let min = s.length;

  for (let i = 1; i <= parseInt(s.length / 2); i++) {
    let len = s.length;
    let cur = s.substring(0, i);
    let cnt = 1;

    for (let j = i; j <= s.length; j += i) {
      const str = s.substring(j, j + i);

      if (cur === str) cnt++;
      else {
        len -= i * (cnt - 1);
        if (cnt > 1) len += (cnt + "").length;
        [cur, cnt] = [str, 1];
      }
    }

    if (len < min) min = len;
  }
  return min;
}
