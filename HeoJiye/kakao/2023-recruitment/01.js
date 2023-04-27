function solution(today, terms, privacies) {
  var answer = [];

  today = Number(today.replaceAll(".", ""));
  const termsDictionary = {};
  terms = terms.map((e) => {
    const [type, period] = e.split(" ");
    termsDictionary[type] = Number(period);
  });
  privacies = privacies.map((e) => e.split(" "));
  privacies.forEach((e) => (e[0] = e[0].split(".").map(Number)));

  for (let i = 0; i < privacies.length; i++) {
    var [day, type] = privacies[i];

    let month_sum = day[1] + termsDictionary[type];
    while (month_sum > 12) {
      month_sum -= 12;
      day[0] += 1;
    }
    day[1] = month_sum;

    day = day.map((e) => (e < 10 ? "0" + e : e)).join("");
    if (today >= day) answer.push(i + 1);
  }

  return answer;
}
