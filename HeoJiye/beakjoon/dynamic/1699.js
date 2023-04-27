// https://www.acmicpc.net/problem/1699

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString().trim();

let N = Number(input);
const dp = [];
for (let i = 0; i <= N; i++) dp[i] = i;

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= Math.sqrt(i); j++) {
    dp[i] = Math.min(dp[i], dp[i - j ** 2] + 1);
  }
}
console.log(dp[N]);
