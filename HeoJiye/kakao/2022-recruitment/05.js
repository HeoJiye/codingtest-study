// 양 < 늑대 -> 모든 양 잡아먹힘
// 최대한 많은 양을 모아서 다시 루트 노드로 돌아온다.

function solution(info, edges) {
  var answer = 0;

  function dfs(stack, curIdx, curN) {
    curN[info[curIdx]] += 1;
    answer = Math.max(answer, curN[0]);

    if (curN[0] <= curN[1]) return;

    var canMoves = edges.filter((e) => e[0] === curIdx).map((e) => e[1]);
    stack.push(...canMoves);

    for (var pos of stack) {
      dfs([...stack], pos, curN);
    }
  }
  dfs([], 0, [0, 0]);
  return answer;
}
