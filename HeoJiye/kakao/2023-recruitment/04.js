function solution(numbers) {
  var answer = [];

  numbers = numbers.map((n) => {
    var binary = [];
    while (n > 0) {
      binary.unshift(n % 2);
      n = Math.floor(n / 2);
    }
    var length = 0;
    for (var i = 0; length < binary.length; i++) {
      length += 2 ** i;
    }
    while (binary.length < length) binary.unshift(0);

    return binary;
  });

  const checkBTree = (tree, start, end) => {
    if (start == end) return true;

    const mid = Math.floor((start + end) / 2);

    if (
      tree[mid] === 0 &&
      (tree[Math.floor((start + mid - 1) / 2)] === 1 ||
        tree[Math.floor((mid + 1 + end) / 2)] === 1)
    ) {
      return false;
    }

    if (!checkBTree(tree, start, mid - 1)) return false;
    if (!checkBTree(tree, mid + 1, end)) return false;

    return true;
  };

  numbers.forEach((n) => {
    if (checkBTree(n, 0, n.length - 1)) answer.push(1);
    else answer.push(0);
  });

  return answer;
}
