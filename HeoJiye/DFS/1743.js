// https://www.acmicpc.net/problem/1743
// type err!

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();

const line = input.split("\n");
const [N, M, K] = line.shift().split(" ").map(Number);
const data = line.map((e) => e.split(" ").map(Number));

const board = [];
for (let i = 0; i < N; i++) {
  board[i] = [];
  for (let j = 0; j < M; j++) {
    board[i][j] = true;
  }
}
for (const [i, j] of data) {
  board[i - 1][j - 1] = false;
}

// dfs로 순회하며 면적 세기
function dfs(board, i, j) {
  if (i < 0 || j < 0 || i >= N || j >= M || board[i][j]) return 0;

  board[i][j] = true;
  return (
    dfs(board, i - 1, j) +
    dfs(board, i, j - 1) +
    dfs(board, i + 1, j) +
    dfs(board, i, j + 1) +
    1
  );
}

let max_count = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    max_count = Math.max(max_count, dfs(board, i, j));
  }
}

console.log(max_count);
