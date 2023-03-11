// https://www.acmicpc.net/problem/1863

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();

const lines = input.split("\n");
lines.shift();

const data = lines.map((e) => e.split(" ").map(Number));
data.sort((a, b) => a[0] - b[0]);

let result = 0;
const stack = [];

for (let [_, value] of data) {
  // 스택이 비어있으면 쌓는다.
  if (stack.length === 0) {
    if (value > 0) {
      stack.push(value);
    }
  }
  // 상승했으면 쌓는다.
  else if (stack[stack.length - 1] < value) {
    if (value > 0) {
      stack.push(value);
    }
  } else {
    // 내려가면 뺀다.
    while (stack.length > 0 && stack[stack.length - 1] > value) {
      stack.pop();
      result += 1;
    }
    // 만약에 뺐는데, 지금 위치보다 아래에서 올라왔다면 지금 값도 스택에 넣는다.
    if (stack.length === 0 || stack[stack.length - 1] < value) {
      if (value > 0) {
        stack.push(value);
      }
    }
  }
}

// 스택에 남아있는게 있다면 뺀다.
while (stack.length > 0) {
  stack.pop();
  result += 1;
}

console.log(result);
