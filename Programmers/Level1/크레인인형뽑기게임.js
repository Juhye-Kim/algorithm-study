function solution(board, moves) {
  const size = board.length;

  let cols = Array(size).fill(0);
  Array(size)
    .fill()
    .forEach((_, i) => checkTop(i));

  let answer = 0;
  let bucket = [];

  moves.forEach((m) => {
    const target = board[cols[m - 1]] && board[cols[m - 1]][m - 1];
    if (target) bucket.push(target);

    cols[m - 1]++;
    checkBucket();
  });

  return answer;

  function checkBucket() {
    const len = bucket.length;

    if (len >= 2 && bucket[len - 1] === bucket[len - 2]) {
      bucket.pop();
      bucket.pop();
      answer += 2;
    }
  }

  function checkTop(col) {
    for (let i = 0; i < size; i++) {
      cols[col] = i;
      if (board[i][col]) break;
    }
  }
}
