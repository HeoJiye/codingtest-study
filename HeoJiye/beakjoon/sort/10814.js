// https://www.acmicpc.net/problem/10814

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "../test.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");

input.shift();

input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log(input.join("\n"));
