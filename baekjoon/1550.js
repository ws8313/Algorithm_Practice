// 백준 1550번 16진수
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

console.log(parseInt(input, 16));