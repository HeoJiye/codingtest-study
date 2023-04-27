// https://www.acmicpc.net/problem/10739

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();
let lines = input.split("\n");

const [N, K] = lines.shift().split(" ").map(Number);
const data = lines.map(Number);

const key_list = {};
key_list[0] = 0;
data.forEach((e, idx) => (key_list[e] = idx));

const fall_count = [];
for (let i = 1; i <= N && i <= K; i++) {
  fall_count[i] = (N - key_list[i - 1] + key_list[i]) % N;
}
let count = fall_count.reduce((acc, cur) => acc + cur);
if (N < K) {
  fall_count[1] = (N - key_list[N] + key_list[1]) % N;

  count +=
    fall_count.reduce((acc, cur) => acc + cur) * (Math.floor(K / N) - 1) +
    fall_count.slice(0, (K % N) + 1).reduce((acc, cur) => acc + cur, 0);
}

console.log(count);
