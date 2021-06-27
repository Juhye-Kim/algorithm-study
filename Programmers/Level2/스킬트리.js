// 프로그래머스 - 스킬트리

// 1. solution (메인함수)
// skill_trees의 각 스킬트리의 '선행스킬 순서'만 확인 (checkOrder)
// 순서가 맞는 스킬트리 총 개수 리턴

// 2. checkOrder (모듈)
// 스킬트리의 '선행스킬 순서' 확인용 모듈
// 스킬트리의 각 스킬을 순회하며 선행스킬배열과 비교
// -> 1) 선행스킬에 해당하는지 확인
// -> 2) 해당하면, 선행스킬 중 몇번째 스킬에 해당하는지 인덱스값을 stack에 담음
//        ex. 선행스킬 : "CBD", 스킬: "C" -> 0번 스킬
//        ex. 선행스킬 : "CBD", 스킬: "D" -> 2번 스킬
// -> 3-1) 만약 stack에 0, 1, 2..  순서대로 담기지 않는다면 false 리턴
//        stack은 [0, 1, 2...] 처럼 완성되어야 하므로 (값 = 값의 인덱스)여야함
// -> 3-2) 만약 모든 스킬이 순서대로 담기면 true 리턴

const checkOrder = (skillArr, tree) => {
  const stack = [];
  for (const el of tree) {
    const idx = skillArr.findIndex((skill) => skill === el);
    if (idx !== -1) {
      if (idx !== stack.length) return false;
      stack.push(idx);
    }
  }
  return true;
};

module.exports = function solution(skill, skillTrees) {
  const skillArr = skill.split("");
  return skillTrees.filter((tree) => checkOrder(skillArr, tree)).length;
};
