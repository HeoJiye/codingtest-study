function solution(board, skill) {
  for (var [type, r1, c1, r2, c2, degree] of skill) {
    if (type === 1) degree *= -1;
    for (var i = r1; i <= r2; i++) {
      for (var j = c1; j <= c2; j++) {
        board[i][j] += degree;
      }
    }
  }

  return board.reduce(
    (acc, cur) => acc + cur.reduce((a, c) => a + (c > 0 ? 1 : 0), 0),
    0
  );
}
