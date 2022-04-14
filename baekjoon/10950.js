// 백준 10950번 A + B - 3
const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
const T = Number(input[0])

for (let i = 1; i <= T; i++) {
    const num = input[i].split(" ");
    const A = Number(num[0])
    const B = Number(num[1])
    console.log(A + B)
}