// 백준 10989번 수 정렬하기 3
// node.js 메모리 부족으로 풀 수 없는 문젲
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n').map(v => v.trim());
const N = input.shift();

input.sort((a, b) => a - b);

console.log(input.join('\n'));