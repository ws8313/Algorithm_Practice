// 백준 1712번 손익분기점
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');
const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

const margin = C - B;
const count = Math.floor(A / margin) + 1;

console.log(margin <= 0 ? -1 : count);