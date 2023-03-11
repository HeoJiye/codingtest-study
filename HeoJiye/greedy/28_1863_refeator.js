// https://www.acmicpc.net/problem/1863

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();

const lines = input.split("\n");
lines.shift();

const data = lines.map((e) => e.split(" ").map(Number));
data.sort((a, b) => a[0] - b[0]);

let count = 0;
const stack = [];

for (let [_, value] of data) {
  // 내려갈 때 스택을 빼면서 count
  while (stack[stack.length - 1] > value) {
    count += 1;
    stack.pop();
  }
  // 스택이 비어있으면 쌓는다
  // + 올라갈 때 스택을 쌓는다
  // + 만약에 뺐는데, 지금 위치보다 아래에서 올라왔다면 지금 값도 스택에 넣는다
  if (stack.length === 0 || stack[stack.length - 1] < value) {
    if (value > 0) {
      stack.push(value);
      count += 1;
    }
  }
}

while (stack.length > 0) {
  stack.pop();
  result += 1;
}

console.log(count);
