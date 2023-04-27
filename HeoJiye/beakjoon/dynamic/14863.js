// https://www.acmicpc.net/problem/14863

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();
const line = input.split("\n");

const [N, K] = line.shift().split(" ").map(Number);
const data = line.map((e, idx) => e.split(" ").map(Number));

const dp = {};

function max(...nums) {
  return Math.max(
    ...nums.map((n) => (n === undefined ? Number.MIN_SAFE_INTEGER : n))
  );
}
for (let i = 0; i < N; i++) {
  const [a, b, c, d] = data[i];
  dp[i] = {};

  if (i == 0) {
    dp[i][a] = b;
    dp[i][c] = max(dp[i][c], d);
  } else {
    for (const [timeString, money] of Object.entries(dp[i - 1])) {
      time = Number(timeString);
      if (time + a <= K) dp[i][time + a] = max(dp[i][time + a], money + b);
      if (time + c <= K) dp[i][time + c] = max(dp[i][time + c], money + d);
    }
  }
}

let result = Number.MIN_SAFE_INTEGER;
for (const [time, money] of Object.entries(dp[N - 1])) {
  result = Math.max(result, money);
}

console.log(result);
