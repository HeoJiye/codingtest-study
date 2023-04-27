// https://www.acmicpc.net/problem/2110

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();

const [N, C, ...data] = input
  .trim()
  .split(/\s/)
  .filter((e) => e) // 이건 백준에서는 넣지 않아도 성공, 로컬에서는 실패
  .map(Number);
data.sort((a, b) => a - b);

let start = 1;
let end = data[data.length - 1] - data[0];

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  let count = 1;
  let prev = data[0];
  for (const cur of data) {
    if (cur - prev < mid) continue;
    prev = cur;
    count += 1;
  }

  if (count < C) end = mid - 1;
  else start = mid + 1;
}

console.log(end);
