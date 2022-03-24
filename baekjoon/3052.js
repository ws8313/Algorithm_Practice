const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const num = [];

// 42로 나눈 나머지 배열에 push
for (let i = 0; i < input.length; i++) {
    const a = input[i] % 42;
    num.push(a)
}

// num 배열 중복 제거
const ans = new Set(num);
const ansArr = [...ans];

console.log(ansArr.length)

// 배열 중복 제거 방법 5가지 https://jsikim1.tistory.com/227
// 백준 제출 전에 경로 수정 좀 제발