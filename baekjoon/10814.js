// 백준 10814번 나이순 정렬
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = input.shift();

input.sort((a, b) => a.split(' ')[0] - b.split(' ')[0]);

console.log(input.join('\n'));