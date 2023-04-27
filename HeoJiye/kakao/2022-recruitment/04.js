function solution(n, info) {
  var answer = [0, []];

  function select(n, idx, arr) {
    if (n < 0 || idx >= info.length) return;

    if (idx === info.length - 1) {
      var result = [...arr, n]; // 남은 화살 넣기

      var a_score = 0;
      var r_score = 0;
      for (var i = 0; i < info.length; i++) {
        if (info[i] === 0 && result[i] === 0) continue;
        if (info[i] < result[i]) r_score += 10 - i;
        else a_score += 10 - i;
      }

      if (answer[0] > r_score - a_score) return;

      // 점수 차가 크면 갱신
      if (answer[0] < r_score - a_score) {
        answer = [r_score - a_score, result];
        return;
      }

      // 점수가 같으면 작은 점수 더 많이 맞춘걸로 변경
      else {
        for (var i = result.length - 1; i >= 0; i--) {
          if (answer[1][i] > result[i]) return;
          if (answer[1][i] < result[i]) {
            answer = [answer[0], [...result]];
            return;
          }
        }
        return;
      }
    }

    select(n - (info[idx] + 1), idx + 1, [...arr, info[idx] + 1]);
    select(n, idx + 1, [...arr, 0]);
  }

  select(n, 0, []);

  if (answer[0] <= 0) return [-1];
  return answer[1];
}
