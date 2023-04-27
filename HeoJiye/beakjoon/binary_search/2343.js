// https://www.acmicpc.net/problem/2343

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();
const line = input.split("\n");

const [N, M] = line.shift().split(" ").map(Number);
const data = line.shift().split(" ").map(Number);

let start = Math.min(...data);
let end = data.reduce((acc, cur) => acc + cur);
let minSize = end;

while (start <= end) {
  let mid = Math.floor((start + end) / 2);

  let count = 0;
  let sum = 0;
  let maxSum = 0;

  for (const e of data) {
    if (sum + e > mid) {
      maxSum = Math.max(maxSum, sum);
      count += 1;
      sum = e;
    } else sum += e;
  }
  if (sum > 0) {
    maxSum = Math.max(maxSum, sum);
    count += 1;
  }

  if (count > M) start = mid + 1;
  else {
    minSize = Math.min(minSize, maxSum);
    end = mid - 1;
  }
}

console.log(minSize);
