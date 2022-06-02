// 백준 2752번 세수정렬
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

console.log(input.sort((a, b) => a - b).join(' '));