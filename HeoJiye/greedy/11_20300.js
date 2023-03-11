// https://www.acmicpc.net/problem/20300

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();

const lines = input.split("\n");
const data = lines[1].split(" ").map((e) => BigInt(e));

let M = 0;

data.sort((a, b) => (a < b ? -1 : 1));

if (data.length % 2 === 1) {
  M = data.pop();
}

while (data.length > 0) {
  const sum = data.pop() + data.shift();
  if (M < sum) M = sum;
}

console.log(String(M));
