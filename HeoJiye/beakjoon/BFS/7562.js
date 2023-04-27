// https://www.acmicpc.net/problem/7562

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();
const line = input.split("\n");

const N = Number(line.shift());
const testcase = [];
for (let i = 0; i < N; i++) {
  testcase[i] = {};
  testcase[i].size = Number(line.shift());
  testcase[i].current = line.shift().split(" ").map(Number);
  testcase[i].goal = line.shift().split(" ").map(Number);
}
const move = [
  [-2, -1],
  [-2, 1],
  [-1, -2],
  [-1, 2],
  [1, -2],
  [1, 2],
  [2, -1],
  [2, 1],
];

function bfs(current, goal, size) {
  const queue = [];
  queue.push(current);

  const visit = [];
  for (let i = 0; i < size; i++) {
    visit[i] = [];
    for (let j = 0; j < size; j++) {
      visit[i][j] = 0;
    }
  }

  while (queue.length > 0) {
    const [x, y] = queue.shift();
    if (x === goal[0] && y === goal[1]) {
      console.log(visit[x][y]);
      break;
    }
    for (const [i, j] of move) {
      if (x + i < 0 || x + i >= size || y + j < 0 || y + j >= size) continue;
      if (visit[x + i][y + j] === 0) {
        visit[x + i][y + j] = visit[x][y] + 1;

        queue.push([x + i, y + j]);
      }
    }
  }
}

for (const { current, goal, size } of testcase) {
  bfs(current, goal, size);
}
