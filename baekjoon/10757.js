// 백준 10757번 큰 수 A + B
const filePath = process.platform === "linux" ? "dev/stdin" : "./예제.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split(" ");
const first = BigInt(input[0]);
const second = BigInt(input[1]);
const answer = (first + second).toString();

console.log(answer);