// 백준 1929번 소수 구하기
const filePath = process.platform === 'linux' ? 'dev/stdin' : './예제.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
let arr = [];
let answer = '';

for (let i = 0; i <= b; i++) {
    arr.push(true);
}
arr[0] = false;
arr[1] = false;

for (let m = 2; m <= b; m++) {
    if (arr[m]) {
        for (let n = 2; n <= b / m; n++) {
            arr[m * n] = false
        }
    }
}

for (let j = a; j <= b; j++) {
    if (arr[j]) answer += j + '\n';
}

console.log(answer.trim());