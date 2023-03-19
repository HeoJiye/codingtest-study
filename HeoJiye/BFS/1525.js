// https://www.acmicpc.net/problem/1525

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();
const line = input.split("\n");

let data = line.map((e) => e.replace(/ /g, "").replace("\r", "")).join("");
const goal = "123456780";
const move = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];

function dfs(data) {
  const memory = {};
  memory[data] = 0;

  const visited = [];
  visited.push(data);

  while (visited.length > 0) {
    const visit = visited.shift();
    const count = memory[visit];

    if (visit === goal) return count;

    const current = visit.indexOf("0");

    for (const [i, j] of move) {
      const newIdx = current + i * 3 + j;
      if (newIdx < 0 || newIdx >= 9) continue;

      const newVisit = swap(visit, current, newIdx);
      if (memory[newVisit] != undefined) continue;

      visited.push(newVisit);
      memory[newVisit] = count + 1;
    }
  }
  return -1;
}

function swap(data, current, move) {
  const newData = data.split("");
  newData[current] = newData[move];
  newData[move] = "0";

  return newData.join("");
}

console.log(dfs(data));
