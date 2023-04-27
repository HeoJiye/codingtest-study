// https://www.acmicpc.net/problem/1654

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();
const line = input.split("\n");

const [K, N] = line.shift().split(" ").map(Number);
const data = line.map(Number);

let start = 0;
let end = Math.max(...data);
let maxLangth = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);

  const num = data.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);
  if (num < N) end = mid - 1;
  else {
    maxLangth = Math.max(maxLangth, mid);
    start = mid + 1;
  }
}

console.log(maxLangth);
