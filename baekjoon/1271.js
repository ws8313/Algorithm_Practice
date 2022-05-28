// 백준 1271번 엄청난 부자2
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');
const n = BigInt(input[0]);
const m = BigInt(input[1]);

console.log((n / m).toString());
console.log((n % m).toString());