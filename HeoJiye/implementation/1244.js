// https://www.acmicpc.net/problem/1244

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString();

const lines = input.split("\n");

const N = Number(lines.shift());
const switchs = lines.shift().split(" ").map(Number);
lines.shift();
const actions = lines.map((e) => e.split(" ").map(Number));

function men(number, switchs) {
  for (let i = 0; i < switchs.length; i++) {
    if ((i + 1) % number === 0) {
      switchs[i] = switchs[i] === 0 ? 1 : 0;
    }
  }
}
function women(number, switchs) {
  const range = Math.max(number - 1, switchs.length - number);
  switchs[number - 1] = switchs[number - 1] === 0 ? 1 : 0;
  for (let i = 1; i <= range; i++) {
    if (switchs[number - 1 - i] != switchs[number - 1 + i]) break;
    switchs[number - 1 - i] = switchs[number - 1 - i] === 0 ? 1 : 0;
    switchs[number - 1 + i] = switchs[number - 1 + i] === 0 ? 1 : 0;
  }
}

actions.forEach(([type, number]) => {
  if (type === 1) men(number, switchs);
  else if (type === 2) women(number, switchs);
});

let result = [];
while (switchs.length > 0) {
  result.push(switchs.splice(0, 20).join(" "));
}
console.log(result.join("\n"));
