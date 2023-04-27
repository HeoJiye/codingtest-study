// https://www.acmicpc.net/problem/1753

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();
const lines = input.split("\n");

const [V, E] = lines.shift().split(" ").map(Number);
const start = Number(lines.shift());

const graph = {};
for (let u = 1; u <= 20001; u++) graph[u] = [];
lines.forEach((e) => {
  const [u, v, w] = e.split(" ").map(Number);
  graph[u].push([v, w]);
});

const INF = Number.MAX_SAFE_INTEGER;
const distance = {};
for (let i = 1; i <= V; i++) distance[i] = INF;

class Heap {
  constructor() {
    this.heap = [null];
  }

  compare(a, b) {
    return a - b;
  }
  setCompare(func) {
    this.compare = func;
  }

  size() {
    return this.heap.length - 1;
  }

  getMin() {
    return this.heap[1] ? this.heap[1] : null;
  }

  swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }

  push(value) {
    this.heap.push(value);
    let curIdx = this.heap.length - 1;
    let parIdx = (curIdx / 2) >> 0;

    while (
      curIdx > 1 &&
      this.compare(this.heap[parIdx], this.heap[curIdx]) > 0
    ) {
      this.swap(parIdx, curIdx);
      curIdx = parIdx;
      parIdx = (curIdx / 2) >> 0;
    }
  }

  pop() {
    const min = this.heap[1];
    if (this.heap.length <= 2) this.heap = [null];
    else this.heap[1] = this.heap.pop();

    let curIdx = 1;
    let leftIdx = curIdx * 2;
    let rightIdx = curIdx * 2 + 1;

    if (!this.heap[leftIdx]) return min;
    if (!this.heap[rightIdx]) {
      if (this.compare(this.heap[leftIdx], this.heap[curIdx]) < 0) {
        this.swap(leftIdx, curIdx);
      }
      return min;
    }

    while (
      this.compare(this.heap[leftIdx], this.heap[curIdx]) < 0 ||
      this.compare(this.heap[rightIdx], this.heap[curIdx]) < 0
    ) {
      const minIdx =
        this.compare(this.heap[leftIdx], this.heap[rightIdx]) > 0
          ? rightIdx
          : leftIdx;
      this.swap(minIdx, curIdx);
      curIdx = minIdx;
      leftIdx = curIdx * 2;
      rightIdx = curIdx * 2 + 1;
    }

    return min;
  }
}

function dijkstra(start, graph) {
  const heap = new Heap();
  heap.setCompare((a, b) => a[0] - b[0]);
  heap.push([0, start]);
  distance[start] = 0;

  while (heap.size() > 0) {
    const [dist, now] = heap.pop();
    if (distance[now] < dist) continue;
    for (const [v, w] of graph[now]) {
      const cost = dist + w;
      if (cost < distance[v]) {
        distance[v] = cost;
        heap.push([cost, v]);
      }
    }
  }
}

dijkstra(start, graph);

for (let i = 1; i <= V; i++) {
  if (distance[i] === INF) distance[i] = "INF";
  console.log(distance[i]);
}
