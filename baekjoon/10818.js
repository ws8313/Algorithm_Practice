// 백준 10818번 최소, 최대
const input = require("fs").readFileSync("/dev/stdin").toString().split("\n")

const count = Number(input[0]);
const num = input[1].split(" ").map(x => Number(x));

num.sort((a, b) => a - b);

console.log(num[0], num[count-1])