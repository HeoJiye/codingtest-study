// https://www.acmicpc.net/problem/11051

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();

const [N, K] = input.split(" ").map(Number);

const factorial = {};
factorial[0] = BigInt(1);
factorial[1] = BigInt(1);

for (let i = 2; i <= 1000; i++) {
  factorial[i] = BigInt(i) * factorial[i - 1];
}
function bionomial_coeffcient(n, k) {
  if (k < 0 || k > n) return 0;
  return factorial[n] / (factorial[k] * factorial[n - k]);
}
const result = bionomial_coeffcient(N, K) % BigInt(10007);
console.log(Number(result));
