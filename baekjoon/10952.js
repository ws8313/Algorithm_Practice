// 백준 10951번 A + B - 5
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
    const num = input[i].split(" ");
    const A = Number(num[0]);
    const B = Number(num[1]);
    if (A === 0 && B === 0) {
        break
    }
    console.log(A + B)
}