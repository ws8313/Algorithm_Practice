// 백준 18108번 1998년생인 내가 태국에서는 2541년생?!
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

console.log(input - 543);