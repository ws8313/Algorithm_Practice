// 백준 15829번 Hashing
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let sum = 0;
let r = 1;

input[1].split('').map((v) => {
  sum += ((v.charCodeAt() - 96) * r) % 1234567891;
  r *= 31;
  r %= 1234567891;
  sum %= 1234567891;
});

console.log(sum);