// https://www.acmicpc.net/problem/17615

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();

const lines = input.split("\n");
const data = lines[1].split("");

let result = Number.MAX_SAFE_INTEGER;

// 빨간 공을 ⬅왼쪽으로 몰자
let count = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] !== "R") {
    while (i < data.length) {
      if (data[i] === "R") count += 1;
      i += 1;
    }
  }
}
result = count;

// 빨간 공을 ➡오른쪽으로 몰자
count = 0;
for (let i = data.length - 1; i >= 0; i--) {
  if (data[i] !== "R") {
    while (i >= 0) {
      if (data[i] === "R") count += 1;
      i -= 1;
    }
  }
}
result = Math.min(result, count);

// 파란 공을 ⬅왼쪽으로 몰자
count = 0;
for (let i = 0; i < data.length; i++) {
  if (data[i] !== "B") {
    while (i < data.length) {
      if (data[i] === "B") count += 1;
      i += 1;
    }
  }
}
result = Math.min(result, count);

// 파란 공을 ➡오른쪽으로 몰자
count = 0;
for (let i = data.length - 1; i >= 0; i--) {
  if (data[i] !== "B") {
    while (i >= 0) {
      if (data[i] === "B") count += 1;
      i -= 1;
    }
  }
}
result = Math.min(result, count);

console.log(result);
