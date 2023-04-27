// https://www.acmicpc.net/problem/2583

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();
const line = input.split("\n");

const [M, N, K] = line.shift().split(" ").map(Number);
const rects = line.map((e) => e.split(" ").map(Number));

// 모눈 종이 초기화
const board = [];
for (let i = 0; i < M; i++) {
  board[i] = [];
  for (let j = 0; j < N; j++) board[i][j] = false;
}

// 입력받은 직사각형 색칠하기
for (const [x1, y1, x2, y2] of rects) {
  for (let i = y1; i < y2; i++) {
    for (let j = x1; j < x2; j++) {
      board[i][j] = true;
    }
  }
}

// dfs로 순회하며 면적 세기
function dfs(board, i, j) {
  if (i < 0 || j < 0 || i >= M || j >= N || board[i][j]) return 0;

  board[i][j] = true;
  return (
    dfs(board, i - 1, j) +
    dfs(board, i, j - 1) +
    dfs(board, i + 1, j) +
    dfs(board, i, j + 1) +
    1
  );
}

let count = 0;
const areas = [];
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    const area = dfs(board, i, j);
    if (area > 0) {
      count += 1;
      areas.push(area);
    }
  }
}

areas.sort((a, b) => a - b);

console.log(count);
console.log(areas.join(" "));
