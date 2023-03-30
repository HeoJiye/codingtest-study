// https://www.acmicpc.net/problem/16235

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();
const lines = input.split("\n");

const [N, M, K] = lines.shift().split(" ").map(Number);
const A = lines.splice(0, N).map((e) => e.split(" ").map(Number));
const T = lines.map((e) => e.split(" ").map(Number));
T.sort((a, b) => {
  if (a[0] != b[0]) return a[0] - b[0];
  if (a[1] != b[1]) return a[1] - b[1];
  return a[2] - b[2];
});
const G = [];
for (let i = 0; i < N; i++) {
  G[i] = [];
  for (let j = 0; j < N; j++) G[i][j] = 5;
}

function spring(T, G) {
  const diedT = [];
  const newT = [];

  // 각 나무가 자신의 나이만큼 양분을 먹고, 나이가 1 증가한다.
  for (let i = 0; i < T.length; i++) {
    const r = T[i][0];
    const c = T[i][1];
    let age = T[i][2];

    if (G[r - 1][c - 1] < age) {
      diedT.push([r, c, age]);
    } else {
      G[r - 1][c - 1] -= age;
      age += 1;
      newT.push([r, c, age]);
    }
  }
  T.length = 0;
  if (newT.length > 0) T.push(...newT);
  return diedT;
}

function summer(diedT, G) {
  // 죽은 나무가 양분으로 변한다.
  for (let i = 0; i < diedT.length; i++) {
    const r = diedT[i][0];
    const c = diedT[i][1];
    let age = diedT[i][2];
    G[r - 1][c - 1] += Math.floor(age / 2);
  }
}

function autumn(N, T) {
  const newT = [];
  for (let i = 0; i < T.length; i++) {
    const r = T[i][0];
    const c = T[i][1];
    const age = T[i][2];
    if (age % 5 === 0) {
      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (
            (i === 0 && j === 0) ||
            r + i < 1 ||
            r + i > N ||
            c + j < 1 ||
            c + j > N
          )
            continue;
          newT.push([r + i, c + j, 1]);
        }
      }
    }
  }

  if (newT.length > 0) {
    T.push(...newT);
    T.sort((a, b) => {
      if (a[0] != b[0]) return a[0] - b[0];
      if (a[1] != b[1]) return a[1] - b[1];
      return a[2] - b[2];
    });
  }
}

function winter(N, A, G) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      G[i][j] += A[i][j];
    }
  }
}

for (let i = 0; i < K; i++) {
  const diedT = spring(T, G);
  summer(diedT, G);
  autumn(N, T);
  winter(N, A, G);
}

console.log(T.length);
