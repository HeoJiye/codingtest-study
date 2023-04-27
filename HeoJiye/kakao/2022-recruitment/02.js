function solution(n, k) {
  // N진수로 변환
  function getNewN(n, k) {
    var newN = 0;
    var digit = 1;
    while (n > 0) {
      newN += (n % k) * digit;
      n = Math.floor(n / k);
      digit *= 10;
    }
    return newN;
  }
  function is_prime(n) {
    if (n <= 1) return false;
    for (var i = 2; i * i <= n; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }

  var newN = getNewN(n, k);
  var arrN = String(newN).split("").map(Number); // 숫자 -> 배열로 변환

  var number = 0;
  var record = [];
  for (var i = 0; i < arrN.length; i++) {
    if (arrN[i] === 0 && number > 0) {
      record.push(number);
      number = 0;
    } else {
      number *= 10;
      number += arrN[i];
    }
  }
  if (number > 0) record.push(number);

  return record.filter((n) => is_prime(n)).length;
}
