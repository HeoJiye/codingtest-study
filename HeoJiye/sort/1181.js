// https://www.acmicpc.net/problem/1181

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

solution(input);

function solution(inputArr) {
  let answer = [];
  let arr = inputArr;
  arr.shift();

  arr = Array.from(new Set(arr)); // 중복제어

  let sorted = arr.sort((a, b) => {
    // 길이별 정렬
    if (a.length !== b.length) {
      return a.length - b.length;
    }
  });
  for (let i = 1; i <= sorted[sorted.length - 1].length; i++) {
    // 같은 길이에서 사전순으로 정렬
    let temp = sorted.filter((el) => el.length === i);
    answer.push(...temp.sort());
  }
  for (let word of answer) {
    // 정답 출력
    console.log(word);
  }
}
