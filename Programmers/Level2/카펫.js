// 프로그래머스 - 카펫
// 찾아낸 규칙
// brown 개수 = 가로*2 + (세로-2)*2 = (가로+세로-2)*2
// yellow 개수 = (가로-2) * (세로-2)

// 필요한 정보 => 가로, 세로
// 바로 구할 수 있는 정보 => 전체 격자수 (사이즈) = yellow + brown

// 1. 전체 사이즈를 구한다.
// 2. 가능한 가로/세로 조합을 모두 찾아낸다. (by 전체사이즈의 약수)
//    ex. 전체사이즈 = 12 -> 1,2,3,4,6,12 -> 이 중 가능한 조합 [6,2], [4,3] (가로 >= 세로)
// 3. 가로/세로 조합중 brown, yellow 규칙에 부합하면 리턴
//    brown개수 = (가로+세로-2)*2, yellow개수 = (가로-2) * (세로-2)

module.exports = function solution(brown, yellow) {
  const size = brown + yellow;

  for (let i = 2; i <= Math.sqrt(size); i++) {
    if (size % i === 0) {
      const 세로 = i;
      const 가로 = size / 세로;
      if (
        (가로 - 2) * (세로 - 2) === yellow &&
        2 * (가로 + 세로 - 2) === brown
      ) {
        return [가로, 세로];
      }
    }
  }
};
