// https://www.acmicpc.net/problem/14502

var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const FOUR_DIRECTION = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function getAllCombinations(arr, m) {
  const combinations = [];
  const picked = [];
  const used = [];
  for (item of arr) used.push(0);

  function find(picked) {
    if (picked.length === m) {
      const rst = [];
      for (let i of picked) {
        rst.push(arr[i]);
      }
      combinations.push(rst);
      return;
    } else {
      let start = picked.length ? picked[picked.length - 1] + 1 : 0;
      for (let i = start; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1] || used[i - 1]) {
          picked.push(i);
          used[i] = 1;
          find(picked);
          picked.pop();
          used[i] = 0;
        }
      }
    }
  }
  find(picked);
  return combinations;
}

const solution = (N, M, board) => {
  let max = 0;
  const virusPosition = [];
  const zeroPosition = [];

  // 바이러스 위치 저장
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (board[i][j] === 0) zeroPosition.push([i, j]);
      if (board[i][j] === 2) virusPosition.push([i, j]);
    }
  }

  const possibleWallPosition = getAllCombinations(zeroPosition, 3);
  possibleWallPosition.forEach((walls) => {
    // 벽세우기
    const tmpBoard = board.map((v) => [...v]);
    walls.forEach(([i, j]) => (tmpBoard[i][j] = 1));
    // 바이러스 퍼뜨리기
    const queue = virusPosition.map((v) => [...v]);
    while (queue.length) {
      const [vI, vJ] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const [dy, dx] = FOUR_DIRECTION[i];
        const [nextY, nextX] = [vI + dy, vJ + dx];
        if (
          nextY < 0 ||
          nextY >= N ||
          nextX < 0 ||
          nextX >= M ||
          tmpBoard[nextY][nextX] === 1 ||
          tmpBoard[nextY][nextX] === 2
        )
          continue;
        tmpBoard[nextY][nextX] = 2;
        queue.push([nextY, nextX]);
      }
    }
    // 최댓값 계산
    const safezoneArea = tmpBoard.reduce(
      (acc, cur) => acc + cur.filter((v) => v === 0).length,
      0
    );
    max = Math.max(max, safezoneArea);
  });

  return max;
};

const [N, M] = input[0].split(" ").map((v) => Number(v));
const board = input.slice(1).map((v) => v.split(" ").map((v) => Number(v)));
console.log(solution(N, M, board));
