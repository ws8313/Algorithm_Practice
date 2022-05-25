// 백준 2751번 수 정렬하기 2
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = Number(input.shift());
const nums = input.map(Number);
const answer = nums.sort((a, b) => a - b);

console.log(answer.join('\n'));