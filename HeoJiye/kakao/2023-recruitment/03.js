function solution(users, emoticons) {
  var answer = [0, 0];

  var discount = [10, 20, 30, 40];

  function search(idx, total) {
    if (idx === emoticons.length) {
      var subscriber = 0;
      var sales = 0;
      for (var i = 0; i < users.length; i++) {
        if (users[i][1] > total[i]) sales += total[i];
        else subscriber += 1;
      }

      if (subscriber > answer[0]) answer = [subscriber, sales];
      if (subscriber === answer[0]) answer[1] = Math.max(answer[1], sales);
      return;
    }
    for (var i = 0; i < discount.length; i++) {
      var sum = [...total];

      var price = (emoticons[idx] * (100 - discount[i])) / 100;

      for (var j = 0; j < users.length; j++) {
        if (discount[i] < users[j][0]) continue;
        sum[j] += price;
      }
      search(idx + 1, sum);
    }
  }

  search(0, new Array(users.length).fill(0));

  return answer;
}
