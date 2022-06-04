// 백준 10817번 세 수
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ');

input.sort((a, b) => a - b);

console.log(input[1]);
