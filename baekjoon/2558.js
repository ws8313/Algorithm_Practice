// 백준 2558번 A + B - 2
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);

console.log(input[0] + input[1]);