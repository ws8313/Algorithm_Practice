// 백준 2869번 달팽이는 올라가고 싶다
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);

const A = input[0];
const B = input[1];
const V = input[2];

// 시간 초과
// let count = 1;
// let sum = 0;

// while (true) {
//     sum += A;
//     if (sum >= V) {
//         console.log(count);
//         break;
//     }
//     sum -= B;
//     if (sum >= V) {
//         console.log(count);
//         break;
//     }
//     count++;
// }

console.log(Math.ceil((V - B) / (A - B)));