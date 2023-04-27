// https://www.acmicpc.net/problem/1446

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();
const lines = input.split("\n");

const [N, D] = lines.shift().split(" ").map(Number);
const graph = {};
for (let i = 0; i <= 10000; i++) graph[i] = [];
lines.forEach((e) => {
  const [start, end, dist] = e.split(" ").map(Number);
  graph[start].push([end, dist]);
  if (end < D) graph[end].push([D, end - D]);
});
graph[0].push([D, D]);

const distance = [];
const INF = Number.MAX_SAFE_INTEGER;
for (let i = 0; i <= 10000; i++) distance[i] = INF;

function dijkstra(start, graph) {
  const heap = [];
  heap.push([0, start]);
  distance[start] = 0;

  while (heap.length > 0) {
    const [distFromStart, now] = heap.shift();
    if (distance[now] < distFromStart) continue;

    for (const [end, distFromNow] of graph[now]) {
      const cost = distFromStart + distFromNow;
      if (cost < distance[end]) {
        distance[end] = cost;
        heap.push([cost, end]);
        heap.sort((a, b) => a[0] - b[0]);
      }
    }
  }
}

dijkstra(0, graph);
console.log(distance[D]);
