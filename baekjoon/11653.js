// 백준 11653번 소인수분해
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().split(' ');
let num = Number(input[0]);
 
let i = 2;
const primes = [];
while (true) {
  if (num % i === 0) {
    num = num / i
    primes.push(i)
    i = 1;
  }
  i++;
  if (i > num) {
    break;
  }
}
 
console.log(primes.join("\n"));