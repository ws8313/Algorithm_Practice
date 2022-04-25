// 백준 1085번 직사각형에서 탈출
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(" ").map(Number)
const x = input[0];
const y = input[1];
const w = input[2];
const h = input[3];
const count = [x, y, w - x, h - y];

console.log(Math.min(...count))
// console.log(Math.min.aplly(null, count)) = 정답
// console.log(Math.min(count)) = NaN 오답