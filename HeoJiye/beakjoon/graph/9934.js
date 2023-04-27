// https://www.acmicpc.net/problem/9934

const fs = require("fs");
const input = fs.readFileSync("./dev/stdin").toString().trim().split("\n");
const N = +input[0];
const num = input[1].split(" ").map(Number);
const answer = [];

for (let i = 0; i < N; i++) {
  answer.push([]);
}

function makeTree(arr, level) {
  if (arr.length == 1) {
    answer[level].push(arr[0]);
    return;
  }
  const center = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, center);
  const rightArr = arr.slice(center + 1, arr.length);

  answer[level].push(arr[center]);
  makeTree(leftArr, level + 1);
  makeTree(rightArr, level + 1);
  return;
}

makeTree(num, 0);
console.log(answer.map((v) => v.join(" ")).join("\n"));
