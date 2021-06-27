// 프로그래머스 - 다음 큰 숫자
// n을 2진수로 변환 + 1이 몇개인지 세기 -> 1의 개수 = ones
// n보다 큰수만 확인하면 되니까, n을 1씩 증가시키면서 ones와 일치하는지 확인
// 일치하면 바로 리턴 (최소값이니까)

function solution(n) {
  const bin = n.toString(2).split("");
  const ones = bin.filter((el) => el === "1").length;

  while (true) {
    n++;
    if (
      ones ===
      n
        .toString(2)
        .split("")
        .filter((el) => el === "1").length
    ) {
      return n;
    }
  }
}

console.log(solution(78)); // 83
